import React, { useContext } from 'react';
import './Order.css';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from './FoodDialog';
import { StateContext } from '../store/StateProvider';

export function Order() {
  const { orders, setOrders, setOpenFood, isActive, onRemove } =
    useContext(StateContext);
  // console.log('hi from order' + JSON.stringify(orders));
  const total = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);
  const GST = total / 11;

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

  return (
    <div
      className={
        isActive
          ? 'nes-container is-rounded order-area'
          : 'nes-container is-rounded order-area.hidden'
      }
    >
      {orders.length === 0 ? (
        <>
          <div>
            <img
              src='/img/Hamster-Pixel-Art.png'
              alt=''
              width='80rem'
              height='70rem'
            />
          </div>
          <div className='order-content'>Your order is empty...</div>
        </>
      ) : (
        <div className='order-content'>
          <div className='order-container'>Your Order</div>
          {orders.map((order, i) => (
            <div className='order-container'>
              <div className='order-item'>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div>
                  <img
                    src='/img/edit.png'
                    alt=''
                    width='30vw'
                    height='30vw'
                    className='nes-pointer'
                    onClick={() => {
                      setOpenFood({ ...order, index: i });
                    }}
                  />
                </div>
                <div>
                  <img
                    src='/img/bin.png'
                    alt=''
                    width='30vw'
                    height='30vw'
                    className='nes-pointer'
                    onClick={() => onRemove(i)}
                  />
                </div>
                <div>{order.choice && order.choice}</div>
                <div>{formatPrice(getPrice(order))}</div>
                {hasToppings(order) && (
                  <>
                    <div></div>
                    <div className='detailed-items'>
                      - 1 x{' '}
                      {order.defaultToppings
                        .filter((t) => t.checked === false)
                        .map((t) => t.name)
                        .join(',')}
                    </div>
                    <div>Extra</div>
                    <div className='detailed-items'>
                      {order.toppings
                        .filter((topping) => topping.checked)
                        .map((t) => t.name)
                        .join(',')}
                    </div>
                    <div />
                    <div />
                  </>
                )}
                <div />
                <div />
                <div />
              </div>
            </div>
          ))}
          <div className='order-container'>
            <div className='order-item'>
              <div />
              <div>Total: </div>
              <div />
              <div>{formatPrice(total)}</div>
            </div>
            <div className='order-item'>
              <div />
              <div>Includes GST of: </div>
              <div />
              <div>{formatPrice(GST)}</div>
            </div>
          </div>
          <button type='button' className='nes-btn is-success pay'>
            Pay
          </button>{' '}
          <div> </div>
        </div>
      )}
    </div>
  );
}
