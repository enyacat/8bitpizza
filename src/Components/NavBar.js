import React from "react";
import "./NavBar.css"

export function NavBar() {
    return (<div className="nav-bar-container">
        <div className="nav-bar"><a href="#Starters">Starters</a></div>
        <div className="nav-bar"><a href="#Traditional-pizza">Traditional pizza</a></div>
        <div className="nav-bar"><a href="#Gourmet-pizza">Gourmet pizza</a></div>
        <div className="nav-bar"><a href="#Seafood-pizza">Seafood pizza</a></div>
        <div className="nav-bar"><a href="#Pasta">Pasta</a></div>
        <div className="nav-bar"><a href="#Desserts">Desserts</a></div>
        <div className="nav-bar"><a href="#Salads">Salads</a></div>
        <div className="nav-bar"><a href="#Deals">Deals</a></div>
        <div className="nav-bar"><a href="#Beverages">Beverages</a></div>
    </div>)
}