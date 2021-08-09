import React from 'react';
import './App.css';
import GroceryList from './components/GroceryList.js';
import ShoppingCart from './components/ShoppingCart.js';
import { Component } from 'react';
import ListItem from './components/ListItem';

class Container extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      groceryItems: [
        {id: 1, title:"Apples"},
        {id: 2, title:"Pears"},
        {id: 3, title:"Salt"}
      ],
      shoppingListItems: [
        {id: 1, title:"Apples"},
        {id: 2, title:"Pears"}
      ]
    };
}
    render() {
      // is niet de goeie render? Gebruikt ListItem... Moet eigenlijk in List?
      const allGroceryItems = this.state.groceryItems.map(item => <ListItem key={item.id}title={item.title} />)
        console.log("allGroceryItems:", allGroceryItems)

      const allShoppingItems = this.state.shoppingListItems.map(item => <ListItem key={item.id}title={item.title} />)
        console.log("allShoppingItems:", allShoppingItems)  
        return (
          <div className="Container">
            <GroceryList dataFromList = {this.state.groceryItems}/>
            <ShoppingCart dataFromShopping = {this.state.shoppingListItems}/>
          </div>
        );
      }
}

// function Container() {
//   const [ groceryItems, setGroceryItems ] = useState("")
//   console.log(groceryItems)
  
//   function addToList () {
//     setGroceryItems(prevGroc => prevGroc + groceryItems) 
//   }

  



export default Container;
