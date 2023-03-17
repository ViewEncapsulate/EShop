using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Errors;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace API.Controllers
{
    public class PaymentsController : BaseApiController
    {
        private readonly string whSecret;
        private readonly IPaymentService paymentService;
        private readonly ILogger<PaymentsController> logger;
        public PaymentsController(IPaymentService paymentService, ILogger<PaymentsController> logger,
        IConfiguration configuration)
        {
            this.logger = logger;
            this.paymentService = paymentService;
            whSecret = configuration.GetSection("StripeSettings:WhSecret").Value;
        }

        [Authorize]
        [HttpPost("{basketId}")]
        public async Task<ActionResult<CustomerBasket>> CreateOrUpdatePaymentIntent(string basketId)
        {
            var basket = await this.paymentService.CreateOrUpdatePaymentIntent(basketId);

            if(basket ==null) return BadRequest(new ApiResponse(400, "Problem with your basket"));

            return basket;
        }

        [HttpPost("webhook")]
        public async Task<ActionResult> StripeWebhook()
        {
            var json = await new StreamReader(Request.Body).ReadToEndAsync();

            var stripeEvent = EventUtility.ConstructEvent(json, Request.Headers["Stripe-Signature"], whSecret);

            PaymentIntent intent;
            Order order;

            switch(stripeEvent.Type)
            {
                case "payment_intent.succeeded":
                    intent = (PaymentIntent) stripeEvent.Data.Object;
                    this.logger.LogInformation("Payment succeeded: ", intent.Id);
                    order = await this.paymentService.UpdateOrderPaymentSucceeded(intent.Id);
                    this.logger.LogInformation("Order updated to payment received: ", order.Id);
                    break;
                case "payment_intent.payment_failed":
                    intent = (PaymentIntent) stripeEvent.Data.Object;
                    this.logger.LogInformation("Payment failed: ", intent.Id);
                    order = await this.paymentService.UpdateOrderPaymentFailed(intent.Id);
                    this.logger.LogInformation("Order updated to payment failed: ", order.Id);
                    break;
            }

            return new EmptyResult();
        }
    }
}