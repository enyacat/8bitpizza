import React from "react";
import "./Order.css"
import { formatPrice } from "../Data/FoodData";
import { getPrice } from "./FoodDialog"


export function Order({ orders, setOrders, onRemove }) {

    const total = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);
    const GST = (total / 11);
    // const onRemove = (idx) => {
    // let orderArr = []
    // for (let i = 0; i < idx; i++) {
    //     orderArr.push(orders[i])
    // }
    // if (idx < orders.length - 1) {
    //     for (let i = orders.length - 1; i > idx; i--) {
    //         orderArr.push(orders[i])
    //     }
    // }

    // removePeople(e) {
    //     var array = [...this.state.people]; // make a separate copy of the array
    //     var index = array.indexOf(e.target.value)
    //     if (index !== -1) {
    //         array.splice(index, 1);
    //         this.setState({ people: array });
    //     }
    // }

    // var orderArr = [...orders]
    // orderArr.splice(idx, 1)
    // setOrders(orderArr)

    // const leftOrders = orders.splice(idx, 1)
    // setOrders(leftOrders)

    // setOrders(orderArr)
    // setOrders([...orders, orders.filter(order => { orders.map((order, idx) => { if (idx !== i) { return order } }) })])
    // setOrders(orders.filter(item => item !== orders[idx]))
    // }

    function hasToppings(food) {
        return food.section.includes('pizza');
    }

    return (< div className="nes-container is-rounded order-area" >
        {
            orders.length === 0 ? (
                <div className="order-content">Your order is empty...</div>) : (
                <div className="order-content">
                    <div className="order-container">Your Order</div>
                    {orders.map((order, i) => (
                        <div key={order.name} className="order-container">
                            <div className="order-item">
                                <div>{order.quantity}</div>
                                <div>{order.name}</div>
                                <div>{order.size}</div>
                                <div>{formatPrice(getPrice(order))}</div>
                                {hasToppings(order) && <><div></div>
                                    <div>- 1 x  {order.defaultToppings.filter(t => (t.checked === false)).map(t => t.name).join(',')}</div>
                                    <div />
                                    <div />
                                    <div>Extra</div>
                                    <div>{order.toppings.filter(topping => topping.checked).map(t => t.name).join(',')}</div>
                                    <div />
                                    <div />
                                </>}


                                <div />
                                <button type="button" className="nes-btn is-error" onClick={() => onRemove(i)}>Remove</button>
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