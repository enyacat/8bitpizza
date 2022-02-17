import { useState } from "react"
import "./Toppings.css"
import { formatPrice } from "../Data/FoodData"

const toppingList = [{ checked: false, section: "Base", name: "Gluten Free Base", price: 4 }, { checked: false, section: "Garnish", name: "Chilli Flakes", price: 0 }, { checked: false, section: "Garnish", name: "Oregano", price: 0 }, { checked: false, section: "Garnish", name: "Peri-Peri Sauce Base", price: 1 }, { checked: false, section: "Garnish", name: "Pesto Aioli", price: 1 }, { checked: false, section: "Garnish", name: "Mint Yoghurt", price: 1 }, { checked: false, section: "Cheese", name: "Cheese", price: 2 }, { checked: false, section: "Cheese", name: "Feta Cheese", price: 2 }, { checked: false, section: "Cheese", name: "Parmesan Cheese", price: 1 }, { checked: false, section: "Sauce", name: "BBQ Sauce Base", price: 0 }, { checked: false, section: "Sauce", name: "Garlic Base", price: 0 }, { checked: false, section: "Sauce", name: "Hot Chili Sauce Base", price: 0 }, { checked: false, section: "Sauce", name: "Napolitana Sauce", price: 0 }, { checked: false, section: "Sauce", name: "Tandoori Sauce Base", price: 0 }, { checked: false, section: "Sauce", name: "Tomato Base", price: 0 }, { checked: false, section: "Sauce", name: "Sweet Chilli Sauce", price: 0 }, { checked: false, section: "Meat", name: "Bacon", price: 2 }, { checked: false, section: "Meat", name: "Beef", price: 2 }, { checked: false, section: "Meat", name: "Cabanossi", price: 2 }, { checked: false, section: "Meat", name: "Chicken", price: 2 }, { checked: false, section: "Meat", name: "Egg", price: 2 }, { checked: false, section: 'Meat', name: "Ham", price: 2 }, { checked: false, section: "Meat", name: "Hot Pepperoni", price: 2 }, { checked: false, section: "Seafood", name: "Anchovies", price: 2 }, { checked: false, section: "Seafood", name: "Prawns", price: 3 }, { checked: false, section: "Veggies&Fruits", name: "Capsicum", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Eggplant", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Fresh Tomato", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Jalapenos", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Mushroom", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Olives", price: 1 }, { checked: false, section: 'Veggies&Fruits', name: "Onions", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Pineapple", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Roasted Eggplant", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Shallots", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Sundried Tomato", price: 1 }]

// const getDefaultToppings = () => {
//     return toppingList.reduce((res, topping) => {
//         if (!res[topping.section]) {
//             res[topping.section] = [];
//         }
//         res[topping.section].push({ name: topping.name, checked: false, price: topping.price })
//         return res;
//     }, {});
// }

export function useToppings() {
    const [toppings, setToppings] = useState(toppingList)

    function checkToppings(index) {
        setToppings(prevItems => {
            return prevItems.map((item, idx) => {
                if (idx === index) {
                    return { ...item, checked: !item.checked }
                } else {
                    return item
                }
            })
        })

    }

    return {
        checkToppings,
        toppings,
        setToppings
    }
}

export function Toppings({ toppings, checkToppings }) {
    console.log("inside Toppings fn", toppings)
    return (
        <div className="topping-content">
            {toppings.map(
                (topping, i) => (
                    <div className="extra-toppings">
                        <input type="checkbox" className="topping-checkbox" checked={topping.checked} onClick={() => { checkToppings(i) }} />
                        <div>{topping.name}</div>
                        <div>{formatPrice(topping.price)}</div>
                    </div>
                )
            )}
        </div>
    )
}