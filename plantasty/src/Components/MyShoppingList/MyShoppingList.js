import React,{useState}  from "react";
import styles from "./MyShoppingList.css";

function MyShoppingList () {
    const [inputValue, setInputValue] = useState("");

    function handleInput(e) {
        setInputValue (e.target.value);
    }
    console.log(inputValue);

    return (
        <div className= "Shopping_List_Container">

            <div className= "Shopping_List_Title">
                <h1> My Shopping List</h1>
            </div>
            <div className="Shopping_List_Search">
                <div className="Shopping_List_Input">
                    <input type="text" placeholder="Add Item..." onChange={handleInput}/>
                </div>
                <div className="Shopping_List_Button">
                    <button>Add To List</button>
                </div>
            </div>
            <div className="Shopping_List_List">
                <ul>
                    <li>{inputValue}
                    </li>
                </ul>
            </div>

        </div>

    
    )
}

export default MyShoppingList;