import React from "react"
import List from './List.js';

// moet hier nog een prop in List om door te geven aan List?
function GroceryList(dataFromList) {
    console.log(dataFromList)
    return (
      <div className="GroceryList">
        <List items = {dataFromList}/>
      </div>
    );
  }

export default GroceryList;
