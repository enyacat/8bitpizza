import './App.css';
import 'nes.css/css/nes.min.css';

import { useState, useContext } from 'react';
import { RegularList } from './Components/RegularList';
import Title from './Components/Title';
import Menu from './Components/Menu';
import { Order } from './Components/Order';
import { FoodDialog } from './Components/FoodDialog';
import { useToppings } from './Components/Toppings';
import { NavBar } from './Components/NavBar';
import { foods } from './Data/FoodData';
// import { StateProvider } from './store/StateProvider';
import { StateContext } from './store/StateProvider';

function App() {
  const [openFood, setOpenFood] = useState();
  const [orders, setOrders] = useState([]);
  const {
    toppings,
    setToppings,
    checkToppings,
    checkDefaultTps,
    defaultTps,
    setDefaultTps,
  } = useToppings();
  const [isActive, setActive] = useState(true);
  const [choiceValue, setChoiceValue] = useState(openFood?.choice);
  const onRemove = (idx) => {
    let orderArr = [...orders];
    orderArr.splice(idx, 1);
    setOrders(orderArr);
  };

  return (
    <StateContext.Provider
      value={{
        foods,
        openFood,
        setOpenFood,
        orders,
        setOrders,
        toppings,
        setToppings,
        checkToppings,
        defaultTps,
        checkDefaultTps,
        isActive,
        setActive,
        onRemove,
        choiceValue,
        setChoiceValue,
      }}
    >
      <div className='container'>
        <div className='App'>
          <NavBar />
          <FoodDialog />
          <main>
            <Menu />
            <Order />
            <div className='upper-arrow-wrapper'>
              <div className='fixed'>
                <a className='nes-pointer' href='#nav-bar-container'>
                  <img
                    src='/img/upperarrow.png'
                    alt=''
                    width='50vw'
                    height='60vw'
                  />
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </StateContext.Provider>
  );
}

export default App;
