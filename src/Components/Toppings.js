import { useEffect, useState } from "react";
import "./Toppings.css";
import { formatPrice } from "../Data/FoodData";
import { foodItems } from "../Data/FoodData";
import { openFood, setOpenFood } from "../App";

const toppingList = [
  { id: 1, section: "Base", name: "Gluten Free Base", price: 4 },
  { id: 2, section: "Garnish", name: "Chilli Flakes", price: 0 },
  { id: 3, section: "Garnish", name: "Oregano", price: 0 },
  { id: 4, section: "Garnish", name: "Peri-Peri Sauce Base", price: 1 },
  { id: 5, section: "Garnish", name: "Pesto Aioli", price: 1 },
  { id: 6, section: "Garnish", name: "Mint Yoghurt", price: 1 },
  { id: 7, section: "Cheese", name: "Cheese", price: 2 },
  { id: 8, section: "Cheese", name: "Feta Cheese", price: 2 },
  { id: 9, section: "Cheese", name: "Parmesan Cheese", price: 1 },
  { id: 10, section: "Sauce", name: "BBQ Sauce Base", price: 0 },
  { id: 11, section: "Sauce", name: "Garlic Base", price: 0 },
  { id: 12, section: "Sauce", name: "Hot Chili Sauce Base", price: 0 },
  { id: 13, section: "Sauce", name: "Napolitana Sauce", price: 0 },
  { id: 14, section: "Sauce", name: "Tandoori Sauce Base", price: 0 },
  { id: 15, section: "Sauce", name: "Tomato Base", price: 0 },
  { id: 16, section: "Sauce", name: "Sweet Chilli Sauce", price: 0 },
  { id: 17, section: "Meat", name: "Bacon", price: 2 },
  { id: 18, section: "Meat", name: "Beef", price: 2 },
  { id: 19, section: "Meat", name: "Cabanossi", price: 2 },
  { id: 20, section: "Meat", name: "Chicken", price: 2 },
  { id: 21, section: "Meat", name: "Egg", price: 2 },
  { id: 22, section: "Meat", name: "Ham", price: 2 },
  { id: 23, section: "Meat", name: "Hot Pepperoni", price: 2 },
  { id: 24, section: "Seafood", name: "Anchovies", price: 2 },
  { id: 25, section: "Seafood", name: "Prawns", price: 3 },
  { id: 26, section: "Veggies&Fruits", name: "Capsicum", price: 1 },
  { id: 27, section: "Veggies&Fruits", name: "Eggplant", price: 1 },
  { id: 28, section: "Veggies&Fruits", name: "Fresh Tomato", price: 1 },
  { id: 29, section: "Veggies&Fruits", name: "Jalapenos", price: 1 },
  { id: 30, section: "Veggies&Fruits", name: "Mushroom", price: 1 },
  { id: 31, section: "Veggies&Fruits", name: "Olives", price: 1 },
  { id: 32, section: "Veggies&Fruits", name: "Onions", price: 1 },
  { id: 33, section: "Veggies&Fruits", name: "Pineapple", price: 1 },
  { id: 34, section: "Veggies&Fruits", name: "Roasted Eggplant", price: 1 },
  { id: 35, section: "Veggies&Fruits", name: "Shallots", price: 1 },
  { id: 36, section: "Veggies&Fruits", name: "Sundried Tomato", price: 1 },
];

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
  return toppingList.map((topping) => ({
    ...topping,
    checked: false,
  }));
}

export function useToppings() {
  const [toppings, setToppings] = useState(getToppingList());
  const [defaultTps, setDefaultTps] = useState([]);

  function checkToppings(index) {
    // const newToppings = [...toppings]
    // newToppings[index].checked = !newToppings[index].checked;
    // setToppings(newToppings)
    setToppings((prevItems) => {
      return prevItems.map((item, idx) => {
        if (idx === index) {
          return { ...item, checked: !item.checked };
        } else {
          return item;
        }
      });
    });
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
    setDefaultTps,
  };
}

export function Toppings({ toppings, checkToppings }) {
  return (
    <div className='topping-content'>
      {toppings.map((topping, i) => (
        <div key={topping.name}>
          <>
            <div>
              {i === 0 || topping.section !== toppings[i - 1].section ? (
                <div className='topping-section'>{topping.section}</div>
              ) : null}
            </div>
          </>
          <div className='toppings'>
            <input
              type='checkbox'
              className='topping-checkbox nes-pointer'
              checked={topping.checked}
              onChange={() => {
                checkToppings(i);
              }}
            />
            <div>{topping.name}</div>
            <div>{formatPrice(topping.price)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ListDefaultTps({
  defaultTps,
  checkDefaultTps,
  setOpenFood,
  openFood,
}) {
  function checkDefaultTps(i) {
    setOpenFood({
      ...openFood,
      defaultToppings: defaultTps.map((topping, index) => {
        if (index === i) {
          return { ...topping, checked: !topping.checked };
        } else {
          return topping;
        }
      }),
    });
  }

  return (
    <div className='topping-content'>
      {openFood.defaultToppings.map((topping, i) => (
        <div key={topping.name} className='toppings'>
          <input
            type='checkbox'
            className='topping-checkbox nes-pointer'
            checked={topping.checked}
            onChange={() => {
              checkDefaultTps(i);
            }}
          />
          <div>{topping.name}</div>
        </div>
      ))}
    </div>
  );
}
