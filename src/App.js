import './App.css';
import "nes.css/css/nes.min.css";

import { useState } from 'react';
import Title from './Components/Title';
import Menu from './Components/Menu';
import { Order } from './Components/Order';
import { FoodDialog } from './Components/FoodDialog'
import { useToppings } from './Components/Toppings'
import { NavBar } from './Components/NavBar'


function App() {
  const [openFood, setOpenFood] = useState();
  const [orders, setOrders] = useState([]);
  const { toppings, setToppings, checkToppings, checkDefaultTps, defaultTps, setDefaultTps } = useToppings();
  const [isActive, setActive] = useState(true);


  const onRemove = (idx) => {
    let orderArr = [...orders]
    orderArr.splice(idx, 1)
    setOrders(orderArr)
  }


  return (
    <div className='container'>
      <div className="App">
        <Title isActive={isActive} />
        <NavBar setActive={setActive} isActive={isActive} />
        <FoodDialog openFood={openFood} setOpenFood={setOpenFood} orders={orders} setOrders={setOrders} toppings={toppings} setToppings={setToppings} checkToppings={checkToppings} defaultTps={defaultTps} checkDefaultTps={checkDefaultTps} />
        <main>
          <Menu setOpenFood={setOpenFood} setDefaultTps={setDefaultTps} />
          <Order orders={orders} setOrders={setOrders} onRemove={onRemove} setOpenFood={setOpenFood} openFood={openFood} isActive={isActive} />
          <div className="upper-arrow-wrapper"><div className='fixed'><a className="nes-pointer" href="#nav-bar-container"><img src="/img/upperarrow.png" alt="" width="50vw" height="60vw" /></a></div></div>
        </main>
      </div>

    </div>
  )
}

export default App;
