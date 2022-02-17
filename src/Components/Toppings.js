import { useEffect, useState } from "react"
import "./Toppings.css"
import { formatPrice } from "../Data/FoodData"
import { foodItems } from "../Data/FoodData"
import { openFood, setOpenFood } from "../App"

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
    const [defaultTps, setDefaultTps] = useState([])

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


    // setDefaultTps(prevItems => {
    //     return prevItems.map((item, idx) => {
    //         if (idx === i) {
    //             return { ...item, checked: !item.checked }
    //         } else {
    //             return item
    //         }
    //     })
    // })



    return {
        checkToppings,
        toppings,
        setToppings,
        defaultTps,
        setDefaultTps
    }
}

export function Toppings({ toppings, checkToppings }) {

    return (
        <div className="topping-content">
            {toppings.map(
                (topping, i) => (
                    <>
                        <><div>{(i === 0 || topping.section !== toppings[i - 1].section) ? <div className="topping-section">{topping.section}</div> : null}</div></>
                        <div className="toppings">
                            <input type="checkbox" className="topping-checkbox" checked={topping.checked} onClick={() => { checkToppings(i) }} />

                            <div>{topping.name}</div>
                            <div>{formatPrice(topping.price)}</div>
                        </div>
                    </>
                )
            )}
        </div>
    )
}

export function ListDefaultTps({ defaultTps, checkDefaultTps, setOpenFood, openFood }) {
    console.log('hi here is openFood', openFood)
    function checkDefaultTps(i) {
        setOpenFood({
            ...openFood, defaultToppings:
                defaultTps.map((topping, index) => {
                    if (index === i) {
                        return { ...topping, checked: !topping.checked }
                    } else {
                        return topping
                    }
                })
        })
    }

    return (
        <div className="topping-content">
            {openFood.defaultToppings.map(
                (topping, i) => (
                    <div className="toppings">
                        <input type="checkbox" className="topping-checkbox" checked={topping.checked} onClick={() => { checkDefaultTps(i) }} />
                        <div>{topping.name}</div>
                    </div>
                )
            )}
        </div >
    )
}