import React from 'react';
import './Menu.css'
import { foods } from "../Data/FoodData"
import { formatPrice } from '../Data/FoodData';


export default function Menu({ setOpenFood }) {

    return (
        <div className='menu'>
            {Object.entries(foods).map(([sectionName, foods]) => (
                <div className='section-name' key={sectionName} >
                    <hr />
                    <h1 id={sectionName}>{sectionName}</h1>
                    <div className="food-grid nes-pointer">
                        {foods.map(food => (

                            <div key={food.name} className='food'
                                img={food.img}
                                style={{
                                    backgroundImage: `url("${food.img}")`
                                }}
                                onClick={() => {
                                    setOpenFood(food);
                                }}>
                                <div className="food-label">
                                    <div>{food.name}</div>
                                    <div>{formatPrice(food.price)}</div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>)
            )
            }
        </div >
    )
}