import React, { useState } from "react";





export function Choices({ openFood, choiceValue, setChoiceValue, setOpenFood }) {

    function handleChange(e) {
        setChoiceValue(e.target.value)

        if (openFood.section === 'Traditional-pizza') {
            if (e.target.value === "Medium") {
                setOpenFood({ ...openFood, price: 13, choice: "Medium" })
            } else if (e.target.value === "Large") {
                setOpenFood({ ...openFood, price: 15, choice: "Large" })
            } else if (e.target.value === "Family") {
                setOpenFood({ ...openFood, price: 20, choice: "Family" })
            }
        } else if (openFood.section === 'Gourmet-pizza') {
            if (e.target.value === "Medium") {
                setOpenFood({ ...openFood, price: 15, choice: "Medium" })
            } else if (e.target.value === "Large") {
                setOpenFood({ ...openFood, price: 17, choice: "Large" })
            } else if (e.target.value === "Family") {
                setOpenFood({ ...openFood, price: 23, choice: "Family" })
            }
        } else if (openFood.section === 'Seafood-pizza') {
            if (e.target.value === "Medium") {
                setOpenFood({ ...openFood, price: 16, choice: "Medium" })
            } else if (e.target.value === "Large") {
                setOpenFood({ ...openFood, price: 18, choice: "Large" })
            } else if (e.target.value === "Family") {
                setOpenFood({ ...openFood, price: 24, choice: "Family" })
            }
        } else if (openFood.section === 'Desserts') {
            if (e.target.value === "Large") {
                setOpenFood({ ...openFood, price: 14, choice: "Large" })
            } else if (e.target.value === "Family") {
                setOpenFood({ ...openFood, price: 20, choice: "Family" })
            }
        } else {
            setOpenFood({ ...openFood, choice: choiceValue })
        }
    }
    console.log(openFood.choices)
    console.log('openFood.choice is ...', openFood.choice)
    console.log('choiceValue is...', choiceValue)
    return (
        <div className="size">
            {openFood.choices.map(choice => (
                <>
                    <label for={choice}>
                        <input
                            type="radio"
                            id={choice}
                            className="nes-radio"
                            name="choice"
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