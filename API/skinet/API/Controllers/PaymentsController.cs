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
        private const string WhSecret = "whsec_b66042463d08265b9c993e947bfa52b8037fcea50bfd92ba5b9e1838554217e3";
        private readonly IPaymentService paymentService;
        private readonly ILogger<PaymentsController> logger;
        public PaymentsController(IPaymentService paymentService, ILogger<PaymentsController> logger)
        {
            this.logger = logger;
            this.paymentService = paymentService;
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

            var stripeEvent = EventUtility.ConstructEvent(json, Request.Headers["Stripe-Signature"], WhSecret);

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