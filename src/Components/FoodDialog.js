import React from "react";
import "./FoodDialog.css"
import { useState } from "react";

import { formatPrice } from "../Data/FoodData";
import { QuantityInput } from "./QuantityInput"

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

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
    const quantityRelated = useQuantity(openFood && openFood.quantity);
    // const toppings = useToppings(openFood.toppings);
    function close() {
        setOpenFood();
    }

    const order = {
        ...openFood,
        quantity: quantityRelated.value,
        // toppings: toppings.toppings
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
                    {/* {hasToppings(openFood) && <>
                        <h3> Extra Toppings </h3>
                        <Toppings {...toppings} />
                    </>} */}
                </div>
                <div className="dialog-footer">
                    <button type="button" className="nes-btn is-error" onClick={addToOrder}>Add to order:
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

