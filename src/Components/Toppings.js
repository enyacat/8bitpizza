import { useEffect, useState } from "react"
import "./Toppings.css"
import { formatPrice } from "../Data/FoodData"
import { foodItems } from "../Data/FoodData"
import { openFood, setOpenFood } from "../App"

const toppingList = [{ section: "Base", name: "Gluten Free Base", price: 4 }, { section: "Garnish", name: "Chilli Flakes", price: 0 }, { section: "Garnish", name: "Oregano", price: 0 }, { section: "Garnish", name: "Peri-Peri Sauce Base", price: 1 }, { section: "Garnish", name: "Pesto Aioli", price: 1 }, { section: "Garnish", name: "Mint Yoghurt", price: 1 }, { section: "Cheese", name: "Cheese", price: 2 }, { section: "Cheese", name: "Feta Cheese", price: 2 }, { section: "Cheese", name: "Parmesan Cheese", price: 1 }, { section: "Sauce", name: "BBQ Sauce Base", price: 0 }, { section: "Sauce", name: "Garlic Base", price: 0 }, { section: "Sauce", name: "Hot Chili Sauce Base", price: 0 }, { section: "Sauce", name: "Napolitana Sauce", price: 0 }, { section: "Sauce", name: "Tandoori Sauce Base", price: 0 }, { section: "Sauce", name: "Tomato Base", price: 0 }, { section: "Sauce", name: "Sweet Chilli Sauce", price: 0 }, { section: "Meat", name: "Bacon", price: 2 }, { section: "Meat", name: "Beef", price: 2 }, { section: "Meat", name: "Cabanossi", price: 2 }, { section: "Meat", name: "Chicken", price: 2 }, { section: "Meat", name: "Egg", price: 2 }, { section: 'Meat', name: "Ham", price: 2 }, { section: "Meat", name: "Hot Pepperoni", price: 2 }, { section: "Seafood", name: "Anchovies", price: 2 }, { section: "Seafood", name: "Prawns", price: 3 }, { section: "Veggies&Fruits", name: "Capsicum", price: 1 }, { section: "Veggies&Fruits", name: "Eggplant", price: 1 }, { section: "Veggies&Fruits", name: "Fresh Tomato", price: 1 }, { section: "Veggies&Fruits", name: "Jalapenos", price: 1 }, { section: "Veggies&Fruits", name: "Mushroom", price: 1 }, { section: "Veggies&Fruits", name: "Olives", price: 1 }, { section: 'Veggies&Fruits', name: "Onions", price: 1 }, { section: "Veggies&Fruits", name: "Pineapple", price: 1 }, { section: "Veggies&Fruits", name: "Roasted Eggplant", price: 1 }, { section: "Veggies&Fruits", name: "Shallots", price: 1 }, { section: "Veggies&Fruits", name: "Sundried Tomato", price: 1 }]


// const getDefaultToppings = () => {
//     return toppingList.reduce((res, topping) => {
//         if (!res[topping.section]) {
//             res[topping.section] = [];
//         }
//         res[topping.section].push({ name: topping.name,checked: false, price: topping.price })
//         return res;
//     }, {});
// }
export function getToppingList() {
    return toppingList.map(topping => ({
        name: topping.name,
        section: topping.section,
        checked: false,
        price: topping.price
    }))
}

export function useToppings() {
    const [toppings, setToppings] = useState(getToppingList())
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
                    <div key={topping.name}>
                        <><div>{(i === 0 || topping.section !== toppings[i - 1].section) ? <div className="topping-section">{topping.section}</div> : null}</div></>
                        <div className="toppings">
                            <input type="checkbox" className="topping-checkbox nes-pointer" checked={topping.checked} onChange={() => { checkToppings(i) }} />
                            <div>{topping.name}</div>
                            <div>{formatPrice(topping.price)}</div>
                        </div>
                    </div>
                )
            )
            }
        </div >
    )
}

export function ListDefaultTps({ defaultTps, checkDefaultTps, setOpenFood, openFood }) {

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
                    <div key={topping.name} className="toppings">
                        <input type="checkbox" className="topping-checkbox nes-pointer" checked={topping.checked} onChange={() => { checkDefaultTps(i) }} />
                        <div>{topping.name}</div>
                    </div>
                )
            )}
        </div >
    )
}