import React from "react";
import styles from "./MyShoppingList.css";

function MyShoppingList () {
    return (
        <div className= "Shopping_List_Container">

            <div className= "Shopping_List_Title">
                <h1> My Shopping List</h1>
            </div>
            <div className="Shopping_List_Search">
                <div className="Shopping_List_Input">
                    <input type="text" placeholder="Add Item..."/>
                </div>
                <div className="Shopping_List_Button">
                    <button>Add To List</button>
                </div>
            </div>
            <div className="Shopping_List_List">
            
            </div>

        </div>

    
    )
}

export default MyShoppingList;