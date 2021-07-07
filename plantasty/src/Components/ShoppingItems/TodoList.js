import React, from "react";
import Todo from "./Todo";

function TodoList({items, setItems, status, setInputVal}) {
    return (
      <div className="todo_list_container">
        <ul>
          {items.map(el => {
            return <Todo
            //props 
            el={el} 
            items={items} 
            setItems={setItems} 
            key={el.id} 
            text={el.text}
            setInputVal={setInputVal}
            />
  
          })}
        </ul>
        
      </div>

      export default TodoList; 