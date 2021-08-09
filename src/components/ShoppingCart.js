import React from "react"
import List from './List.js';
import Container from "../Container.js"

// moet hier nog een prop in List om door te geven aan List?
function ShoppingCart(dataFromShopping) {
    console.log(dataFromShopping)
    return (
      <div className="ShoppingCart">
        <List items = {dataFromShopping}/>
      </div>
    );
  }

export default ShoppingCart;
