import React, { useContext } from 'react';
import { StateContext } from '../store/StateProvider';
import './Choices.css';

export function Choices() {
  const { openFood, choiceValue, setChoiceValue, setOpenFood } =
    useContext(StateContext);
  function handleChange(e) {
    setChoiceValue(e.target.value);

    if (openFood.section === 'Traditional-pizza') {
      if (e.target.value === 'Medium') {
        setOpenFood({ ...openFood, price: 13, choice: 'Medium' });
      } else if (e.target.value === 'Large') {
        setOpenFood({ ...openFood, price: 15, choice: 'Large' });
      } else if (e.target.value === 'Family') {
        setOpenFood({ ...openFood, price: 20, choice: 'Family' });
      }
    } else if (openFood.section === 'Gourmet-pizza') {
      if (e.target.value === 'Medium') {
        setOpenFood({ ...openFood, price: 15, choice: 'Medium' });
      } else if (e.target.value === 'Large') {
        setOpenFood({ ...openFood, price: 17, choice: 'Large' });
      } else if (e.target.value === 'Family') {
        setOpenFood({ ...openFood, price: 23, choice: 'Family' });
      }
    } else if (openFood.section === 'Seafood-pizza') {
      if (e.target.value === 'Medium') {
        setOpenFood({ ...openFood, price: 16, choice: 'Medium' });
      } else if (e.target.value === 'Large') {
        setOpenFood({ ...openFood, price: 18, choice: 'Large' });
      } else if (e.target.value === 'Family') {
        setOpenFood({ ...openFood, price: 24, choice: 'Family' });
      }
    } else if (openFood.section === 'Desserts') {
      if (e.target.value === 'Large') {
        setOpenFood({ ...openFood, price: 14, choice: 'Large' });
      } else if (e.target.value === 'Family') {
        setOpenFood({ ...openFood, price: 20, choice: 'Family' });
      }
    } else {
      setOpenFood({ ...openFood, choice: choiceValue });
    }
  }

  return (
    <div className='size'>
      {openFood.choices.map((choice) => (
        <div key={choice}>
          <label>
            <input
              type='radio'
              id={choice}
              className='nes-radio'
              name='choice'
              value={choice}
              checked={choice === choiceValue}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span>{choice}</span>
          </label>{' '}
        </div>
      ))}
    </div>
  );
}
