import './QuantityInput.css'
import { useState } from "react";


export function QuantityInput({ quantityRelated }) {
    return <div className="increment-container">
        <div>Quantity:  </div>
        <button type="button" className="nes-btn is-success increment-button" onClick={() => {
            quantityRelated.setValue(quantityRelated.value - 1);
        }} disabled={quantityRelated.value === 1}> - </button>
        <input className="quantity-input" {...quantityRelated}></input>
        <button type="button" className="nes-btn is-success increment-button" onClick={() => {
            quantityRelated.setValue(quantityRelated.value + 1);
        }}> + </button>
    </div >
}