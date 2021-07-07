import React from "react"; 
import "./Todo.css";

function Todo({el, text, items, setItems, setInputVal}) {

    function handleMarkStatus(e){
      setItems(items.map((i) => {
        if(i.text === el.text){
          return {
              //spread operator
            ...i,
            //opposite 
            status: !i.status
          }
  
        }
        return i;
      }))
  
    }
    function handleDelete(){
      setItems(items.filter(els => els.id !== el.id));
      setInputVal('')
  
    }
  
    const itemClass = "isItemCompleted-" + (el.status ? "done" : "undone"); 
  
    return (
      <div className="todo_container">
        <div className="todo_item">
          <input type="checkbox" onChange={handleMarkStatus}/>
          <span className={itemClass}>{text}</span>
          <button onClick={handleDelete}>x</button>
        </div>
        
      </div>
    )
  }
  
  export default Todo