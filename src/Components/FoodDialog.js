import React from "react";
import "./FoodDialog.css"
import { useState } from "react";

import { formatPrice } from "../Data/FoodData";
import { QuantityInput } from "./QuantityInput";
import { useToppings } from "./Toppings"
import { Toppings, getToppingList } from "./Toppings"
import { ListDefaultTps } from "./Toppings"
import { Choices } from "./Choices"

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
    const tPrice = order.toppings
        .filter(t => t.checked)
        .map(t => t.price)
        .reduce((totalTPrice, price) => totalTPrice + price, 0)
    return order.quantity * (order.price + tPrice)
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders, toppings, checkToppings, setToppings, defaultTps, checkDefaultTps }) {
    const quantityRelated = useQuantity(openFood && openFood.quantity);
    const [choiceValue, setChoiceValue] = useState("Family")
    const isEditing = openFood.index > -1;
    const order = {
        ...openFood,
        quantity: quantityRelated.value,
        toppings: toppings,
        choice: choiceValue
    }

    function close() {
        setOpenFood();
    }

    function addToOrder() {
        setOrders([...orders, order]);
        close();
        setToppings(getToppingList())
    }

    function editOrder() {
        let newOrders = [...orders]
        newOrders[openFood.index] = order;
        setOrders(newOrders);
        close();

        // setOrders(...newOrders, newOrders.map((order, idx) => { if (idx === openFood.index) return order }))
    }
    if (!openFood) return null;

    function hasToppings(food) {
        return food.section.includes('pizza');
    }

    return (
        openFood ? (<div className="food-dialog">
            <div className="dialog-shadow" onClick={close}></div>
            <div className="dialog">
                <div className="dialog-banner" style={{
                    backgroundImage: `url("${openFood.img}")`
                }}>
                    <div className="dialog-banner-name">{openFood.name}</div>
                </div>
                <div className="dialog-content">
                    {openFood.ingredients && <div>Ingredient: <textarea className="ingredient">{openFood.ingredients}</textarea></div>}
                    {openFood.choices && <div className="choice">
                        <Choices openFood={openFood} choiceValue={choiceValue} setChoiceValue={setChoiceValue} setOpenFood={setOpenFood} /></div>}
                    <QuantityInput quantityRelated={quantityRelated} />

                    {hasToppings(openFood) && <div>
                        {openFood.defaultToppings.length !== 0 && <><div>Current Toppings</div>
                            <ListDefaultTps defaultTps={openFood.defaultToppings} checkDefaultTps={checkDefaultTps} openFood={openFood} setOpenFood={setOpenFood} /></>}
                        <div> Extra Toppings </div>
                        <Toppings toppings={toppings} checkToppings={checkToppings} />
                    </div>}
                </div>
                <div className="dialog-footer">
                    <button type="button" className="nes-btn is-error" onClick={isEditing ? editOrder : addToOrder}>{isEditing ? "Update order: " : "Add to order: "}{formatPrice(getPrice(order))}
                    </button>
                </div>
            </div>
        </div>
        ) : null
    );

}
export function FoodDialog(props) {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props} />
}

