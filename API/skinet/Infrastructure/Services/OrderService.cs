using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specification;

namespace Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IBasketRepository basketRepo;
        private readonly IUnitOfWork unitOfWork;
        public OrderService(IBasketRepository basketRepo, IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
            this.basketRepo = basketRepo;
        }

        public async Task<Order> CreateOrderAync(string buyerEmail, int deliveryMethodId, string basketId, Address shippingAddress)
        {
            // get basket from the repo
            var basket = await this.basketRepo.GetBasketAsync(basketId);

            //get items from the product repo
            var items = new List<OrderItem>();
            foreach(var item in basket.Items)
            {
                var productItem = await this.unitOfWork.Repository<Product>().GetByIdAsync(item.Id);
                var itemOrdered = new ProductItemOrdered(productItem.Id, productItem.Name,
                productItem.PictureUrl);
                var orderItem = new OrderItem(itemOrdered, productItem.Price, item.Quantity);
                items.Add(orderItem);
            }


            // get delivery method from repo
            var deliveryMethod = await this.unitOfWork.Repository<DeliveryMethod>().GetByIdAsync(deliveryMethodId);

            //  calc subtotal
            var subtotal = items.Sum(item => item.Price * item.Quantity);

            // check to see if order exists
            var spec = new OrderByPaymentIntentIdSpecification(basket.PaymentIntentId);
            var order = await this.unitOfWork.Repository<Order>().GetEntityWithSpec(spec);

            if(order !=null) {
                order.ShipToAddress =shippingAddress;
                order.deliveryMethod = deliveryMethod;
                order.Subtotal = subtotal;
                this.unitOfWork.Repository<Order>().Update(order);
            }
            else {
            // create order
            order = new Order(items, buyerEmail, shippingAddress, deliveryMethod, subtotal, basket.PaymentIntentId);
            this.unitOfWork.Repository<Order>().Add(order);
            }

            // save it to db
            var result = await this.unitOfWork.Complete();

            if (result <= 0) return null;

            //return order
            return order;
        }

        public async Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodAsync()
        {
            return await this.unitOfWork.Repository<DeliveryMethod>().ListAllAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(id, buyerEmail);

            return await this.unitOfWork.Repository<Order>().GetEntityWithSpec(spec);
        }

        public async Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(buyerEmail);

            return await this.unitOfWork.Repository<Order>().ListAsync(spec);
        }
    }
}