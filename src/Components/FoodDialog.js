import React from "react";
import "./FoodDialog.css"
import { useState } from "react";

import { formatPrice } from "../Data/FoodData";
import { QuantityInput } from "./QuantityInput";
import { useToppings } from "./Toppings"
import { Toppings } from "./Toppings"

function useQuantity(defaultQuantity) {
    const [value, setValue] = useState(defaultQuantity || 1);

    function onChange(e) {
        if (!(+e.target.value >= 1)) {
            setValue(1);
            return;
        }
        setValue(+e.target.value);
    }

    return {
        value,
        setValue,
        onChange
    };
}

export function getPrice(order) {
    // const tPrice = Object.values(order.toppings)
    //     .filter(t => t.checked)
    //     .map(t => t.price)
    //     .reduce((totalToppingPrice, toppingPrice) => totalToppingPrice + toppingPrice, 0)
    // return order.quantity * (order.price + tPrice)
    return order.quantity * order.price
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders, toppings, checkToppings }) {
    const quantityRelated = useQuantity(openFood && openFood.quantity);
    // const toppings = useToppings(openFood.toppings);
    function close() {
        setOpenFood();
    }

    const order = {
        ...openFood,
        quantity: quantityRelated.value,
        toppings: toppings
    }

    function addToOrder() {
        setOrders([...orders, order]);
        close();
    }
    if (!openFood) return null;

    function hasToppings(food) {
        return food.section.includes('pizza');
    }

    return (
        openFood ? (<>
            <div className="dialog-shadow" onClick={close}></div>
            <div className="dialog">
                <div className="dialog-banner" style={{
                    backgroundImage: `url("${openFood.img}")`
                }}>
                    <div className="dialog-banner-name">{openFood.name}</div>
                </div>
                <div className="dialog-content">
                    <div>Ingredient: <textarea className="ingredient">{openFood.ingredients}</textarea></div>
                    <QuantityInput quantityRelated={quantityRelated} />

                    {hasToppings(openFood) && <div className="ingredient">
                        <div> Extra Toppings </div>
                        <Toppings toppings={toppings} checkToppings={checkToppings} />
                    </div>}
                </div>
                <div className="dialog-footer">
                    <button type="button" className="nes-btn is-error" onClick={addToOrder}>Add to order:{formatPrice(getPrice(order))}
                    </button>
                </div>
            </div>
        </>
        ) : null
    );

}
export function FoodDialog(props) {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props} />
}

