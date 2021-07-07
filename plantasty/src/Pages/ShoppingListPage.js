import React from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer";
import ShoppingList2 from "../Components/ShoppingItems/ShoppingList2";

function ShoppingList() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <ShoppingList2 />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ShoppingList;
