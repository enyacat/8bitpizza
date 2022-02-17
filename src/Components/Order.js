import React from "react";
import "./Order.css"
import { formatPrice } from "../Data/FoodData";


export function Order({ orders }) {

    return (
        <div className="order-area">
            <div className="order-content">Your order is empty...</div>
            <div className="order-content">Your order is
                <div className="order-container">Your Order</div>
            </div>


        </div>

    )
}