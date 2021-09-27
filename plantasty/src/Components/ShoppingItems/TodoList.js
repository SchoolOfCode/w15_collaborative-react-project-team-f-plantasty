import React from "react";
import Todo from "./Todo";

function TodoList({ items, setItems, status, setInputValue }) {
  return (
    <div className="todo_list_container">
      <ul>
        {items.map((el) => {
          return (
            <Todo
              //props
              el={el}
              items={items}
              setItems={setItems}
              key={el.id}
              text={el.text}
              setInputValue={setInputValue}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default TodoList;
