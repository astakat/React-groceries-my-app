import React from "react"
import ListItem from "./ListItem";


// moet ListItems renderen vanuit ListItem? Klopt dat uberhaupt wel?

function List() {
  // const groceryItem = this.state.groceryItems.map(item => <ListItem key={item.id}title={item.title} />)
  //       console.log(groceryItem)
          return (
            <div className="List">
              <ListItem/>
            </div>
          );
      }


export default List