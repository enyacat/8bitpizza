import React from "react";
import "./Order.css"
import { formatPrice } from "../Data/FoodData";
import { getPrice } from "./FoodDialog"


export function Order({ orders, setOrders }) {

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
                                <div>{ }</div>
                                <div>{formatPrice(getPrice(order))}</div>
                            </div>

                        </div>
                    )
                    )}
                </div>)


        }
    </div >)
}