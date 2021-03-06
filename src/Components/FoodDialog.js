import React from 'react';
import './FoodDialog.css';
import { useState, useContext } from 'react';

import { formatPrice } from '../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { useToppings } from './Toppings';
import { Toppings, getToppingList } from './Toppings';
import { ListDefaultTps } from './Toppings';
import { Choices } from './Choices';
import { StateContext } from '../store/StateProvider';

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
    onChange,
  };
}

export function getPrice(order) {
  var tPrice = '';
  if (order.toppings) {
    tPrice = order.toppings
      .filter((t) => t.checked)
      .map((t) => t.price)
      .reduce((totalTPrice, price) => totalTPrice + price, 0);
  }
  return order.quantity * (order.price + tPrice);
}

function FoodDialogContainer() {
  const {
    openFood,
    setOpenFood,
    setOrders,
    orders,
    toppings,
    checkToppings,
    checkDefaultTps,
    choiceValue,
    setChoiceValue,
  } = useContext(StateContext);

  const quantityRelated = useQuantity(openFood && openFood.quantity);

  const isEditing = openFood.index > -1;
  var order;

  if (hasToppings(openFood)) {
    order = {
      ...openFood,
      quantity: quantityRelated.value,
      toppings: toppings,
      choice: choiceValue,
    };
  } else {
    order = {
      ...openFood,
      quantity: quantityRelated.value,
      choice: choiceValue,
    };
  }

  function close() {
    setOpenFood();
  }

  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }

  function editOrder() {
    let newOrders = [...orders];
    newOrders[openFood.index] = order;
    setOrders(newOrders);
    close();

    // setOrders(...newOrders, newOrders.map((order, idx) => { if (idx === openFood.index) return order }))
  }
  if (!openFood) return null;

  function hasToppings(food) {
    return food.section.includes('pizza');
  }

  return openFood ? (
    <div className='food-dialog'>
      <div className='dialog-shadow' onClick={close}></div>
      <div className='dialog'>
        <div
          className='dialog-banner'
          style={{
            backgroundImage: `url("${openFood.img}")`,
          }}
        >
          <div className='dialog-banner-name'>{openFood.name}</div>
        </div>
        <div className='dialog-content'>
          {openFood.ingredients && (
            <div>
              Ingredient:{' '}
              <textarea
                className='ingredient'
                defaultValue={openFood.ingredients}
              ></textarea>
            </div>
          )}
          {openFood.choices && (
            <div className='choice'>
              <Choices
                openFood={openFood}
                choiceValue={choiceValue}
                setChoiceValue={setChoiceValue}
                setOpenFood={setOpenFood}
              />
            </div>
          )}
          <QuantityInput quantityRelated={quantityRelated} />

          {hasToppings(openFood) && (
            <div>
              {openFood.defaultToppings.length !== 0 && (
                <>
                  <div>Current Toppings</div>
                  <ListDefaultTps
                    defaultTps={openFood.defaultToppings}
                    checkDefaultTps={checkDefaultTps}
                    openFood={openFood}
                    setOpenFood={setOpenFood}
                  />
                </>
              )}
              <div> Extra Toppings </div>
              <Toppings toppings={toppings} checkToppings={checkToppings} />
            </div>
          )}
        </div>
        <div className='dialog-footer'>
          <button
            type='button'
            className='nes-btn is-error'
            disabled={openFood.choices && !choiceValue}
            onClick={isEditing ? editOrder : addToOrder}
          >
            {isEditing ? 'Update order: ' : 'Add to order: '}
            {formatPrice(getPrice(order))}
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
export function FoodDialog() {
  const { openFood } = useContext(StateContext);
  if (!openFood) return null;
  return <FoodDialogContainer />;
}
