import React from "react";
import "./Order.css"
import { formatPrice } from "../Data/FoodData";
import { getPrice } from "./FoodDialog"


export function Order({ orders, setOrders }) {

    const total = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);
    const GST = (total / 11);

    return (< div className="nes-container is-rounded order-area" >
        {
            orders.length === 0 ? (
                <div className="order-content">Your order is empty...</div>) : (
                <div className="order-content">
                    <div className="order-container">Your Order</div>
                    {orders.map(order => (
                        <div className="order-container">
                            <div className="order-item">
                                <div>{order.quantity}</div>
                                <div>{order.name}</div>
                                <div />
                                <div>{formatPrice(getPrice(order))}</div>
                                <div>Current</div>
                                <div>{order.defaultToppings.filter(t => t.checked).map(t => t.name).join(',')}</div>
                                <div />
                                <div />
                                <div>Extra</div>
                                <div>{order.toppings.filter(topping => topping.checked).map(t => t.name).join(',')}</div>
                                <div />
                                <div />
                            </div>

                        </div>
                    )
                    )}
                    <div className="order-container">
                        <div className="order-item">
                            <div />
                            <div>Total: </div>
                            <div />
                            <div>{formatPrice(total)}</div>
                        </div>
                        <div className="order-item">
                            <div />
                            <div>Includes GST of: </div>
                            <div />
                            <div>{formatPrice(GST)}</div>
                        </div>
                    </div>
                </div>)


        }
    </div >)
}