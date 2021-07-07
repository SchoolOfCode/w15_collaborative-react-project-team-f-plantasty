import React, { useState } from "react";
import TodoList from "./TodoList";

function ShoppingList2() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    // stops the page from continuing
    e.preventDefault();
    //update the state of setItems
    setItems([
      // spread operator
      ...items,
      //adds another object
      {
        //keys
        text: inputValue,
        status: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputValue("");
  }

  return (
    <div className="shopping_container">
      <div className="shopping_title">
        <h1>My Shopping List</h1>
      </div>
      <div className="shopping_input_container">
        <div className="shopping_input_input">
          <input
            type="text"
            placeholder="Add item..."
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleSubmit}>Add</button>

          <TodoList
            items={items}
            setItems={setItems}
            status={items.status}
            setInputValue={setInputValue}
          />
        </div>
      </div>
    </div>
  );
}

export default ShoppingList2;
