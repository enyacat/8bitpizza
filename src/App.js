import './App.css';
import "nes.css/css/nes.min.css";

import { useState } from 'react';
import Title from './Components/Title';
import Menu from './Components/Menu';
import { Order } from './Components/Order';
import { FoodDialog } from './Components/FoodDialog'
import { useToppings } from './Components/Toppings'
import { foodItems } from './Data/FoodData';

function App() {
  const [openFood, setOpenFood] = useState();
  const [orders, setOrders] = useState([]);
  const { toppings, setToppings, checkToppings } = useToppings();

  return (
    <div className="App">
      <Title />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} orders={orders} setOrders={setOrders} toppings={toppings} setToppings={setToppings} checkToppings={checkToppings} />
      <Menu openFood={openFood} setOpenFood={setOpenFood} />
      <Order orders={orders} setOrders={setOrders} />

    </div>
  )
}

export default App;
