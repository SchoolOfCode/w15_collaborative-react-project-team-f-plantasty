import React from "react";
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';
import MyShoppingList from '../Components/MyShoppingList/MyShoppingList'

function ShoppingList() {
    return (
    <div>
        <div>
          <Navbar />
        </div>
        <div>
       <MyShoppingList/>
      </div>
        <footer>
          <Footer />
        </footer>
    </div>
    );
  }
  
  export default ShoppingList;