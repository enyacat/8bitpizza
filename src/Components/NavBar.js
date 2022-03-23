import { useContext } from 'react';
import './NavBar.css';
import { StateContext } from '../store/StateProvider';

export function NavBar() {
  const { setActive, isActive } = useContext(StateContext);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div id='nav-bar-container'>
      <div className='nav-bar'>
        <a href='#Starters'>Starters</a>
      </div>
      <div className='nav-bar'>
        <a href='#Traditional-pizza'>Traditional pizza</a>
      </div>
      <div className='nav-bar'>
        <a href='#Gourmet-pizza'>Gourmet pizza</a>
      </div>
      <div className='nav-bar'>
        <a href='#Seafood-pizza'>Seafood pizza</a>
      </div>
      <div className='nav-bar'>
        <a href='#Pasta'>Pasta</a>
      </div>
      <div className='nav-bar'>
        <a href='#Desserts'>Desserts</a>
      </div>
      <div className='nav-bar'>
        <a href='#Salads'>Salads</a>
      </div>
      <div className='nav-bar'>
        <a href='#Deals'>Deals</a>
      </div>
      <div className='nav-bar'>
        <a href='#Beverages'>Beverages</a>
        <div>
          <button
            type='button'
            className='nes-btn is-warning'
            onClick={toggleClass}
          >
            <img
              src='/img/shoppingCart.svg'
              alt=''
              width='20vw'
              height='20vw'
            />
          </button>
        </div>
      </div>
    </div>
  );
}
