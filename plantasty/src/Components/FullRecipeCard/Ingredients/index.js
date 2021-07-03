import React  from 'react';
import styles from './ingredients.module.css';

function Ingredients() {
   
        return (
            <section className = {styles}>
            <div>
            <h2>Ingredients:</h2>
            <ul>
            <li className = "checkbox-list">
            <input type="checkbox"  name="ingredient" value="Banana" />Banana
           </li>
            <li>
            <input type="checkbox"  name="ingredient" value="Banana" />Banana
            </li>
            <li>
            <input type="checkbox"  name="ingredient" value="Banana" />Banana
            </li>
            </ul>
            </div>


            <div>
            <button>Add  all ingredients to shopping list</button>
            </div>

            </section>
            

        );

}



export default Ingredients;