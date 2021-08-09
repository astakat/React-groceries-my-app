import React from "react";

function ListItem(item) {
  return (
    <li 
    key={item.id}
    className="list-item"
    // onClick={clickItem}
    value={item.title}
    >
      <h3>{item.title}</h3>
    </li>
  );
}

export default ListItem;
