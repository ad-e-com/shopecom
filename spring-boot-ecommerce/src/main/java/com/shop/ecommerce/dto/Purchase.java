package com.shop.ecommerce.dto;

import com.shop.ecommerce.entity.Address;
import com.shop.ecommerce.entity.Customer;
import com.shop.ecommerce.entity.Order;
import com.shop.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
