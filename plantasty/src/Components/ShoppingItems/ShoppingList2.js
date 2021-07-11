import React, { useState } from "react";
import TodoList from "./TodoList";
import styles from "./ShoppingList.css";
import notepad from "./notepad.jpg";

function ShoppingList2() {
  //declared the
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    // stops the page from continuing
    // e.preventDefault();
    //update the state of setItems
    console.log(inputValue);
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
    console.log(inputValue);
  }

  return (
    <div className="shopping_container">
      <div className="shopping_title">
        <h1>My Shopping List</h1>
        <p className="shopping_header">
          Going to the store to shop can be a tedious task, especially if you
          forget to buy some of the items you need. Fortunately, you can easily
          avoid this by making a shopping list using our app.
        </p>
      </div>
      <div className="shopping_input_container">
        <div id="input" className="shopping_input_input">
          <input
            type="text"
            placeholder="Add item..."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button className="shopping_add_button" onClick={handleSubmit}>
            Add to Shopping List
          </button>
          <img
            className="shopping_notepad"
            src={notepad}
            alt="notepad and pen"
          />
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
