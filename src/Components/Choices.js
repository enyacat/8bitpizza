import React, { useState } from "react";





export function Choices({ openFood, choiceValue, setChoiceValue, setOpenFood }) {

    function handleChange(e) {
        setChoiceValue(e.target.value)

        if (openFood.section === 'Traditional-pizza') {
            if (e.target.value === "Medium") {
                setOpenFood({ ...openFood, price: 13, choice: choiceValue })
            } else if (e.target.value === "Large") {
                setOpenFood({ ...openFood, price: 15, choice: choiceValue })
            } else if (e.target.value === "Family") {
                setOpenFood({ ...openFood, price: 20, choice: choiceValue })
            }
        } else if (openFood.section === 'Gourmet-pizza') {
            if (e.target.value === "Medium") {
                setOpenFood({ ...openFood, price: 15, choice: choiceValue })
            } else if (e.target.value === "Large") {
                setOpenFood({ ...openFood, price: 17, choice: choiceValue })
            } else if (e.target.value === "Family") {
                setOpenFood({ ...openFood, price: 23, choice: choiceValue })
            }
        } else if (openFood.section === 'Seafood-pizza') {
            if (e.target.value === "Medium") {
                setOpenFood({ ...openFood, price: 16, choice: choiceValue })
            } else if (e.target.value === "Large") {
                setOpenFood({ ...openFood, price: 18, choice: choiceValue })
            } else if (e.target.value === "Family") {
                setOpenFood({ ...openFood, price: 24, choice: choiceValue })
            }
        } else if (openFood.section === 'Desserts') {
            if (e.target.value === "Large") {
                setOpenFood({ ...openFood, price: 14, choice: choiceValue })
            } else if (e.target.value === "Family") {
                setOpenFood({ ...openFood, price: 20, choice: choiceValue })
            }
        }
    }

    return (
        <div className="size">
            {openFood.choices.map(choice => (
                <>
                    <label for={choice}>
                        <input
                            type="radio"
                            id={choice}
                            className="nes-radio"
                            name="answer"
                            value={choice}
                            checked={choice === choiceValue}
                            onChange={(e) => {
                                handleChange(e)
                            }}
                        />
                        <span>{choice}</span></label>{" "}
                </>
            ))}



        </div>
    )
}