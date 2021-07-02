import React  from 'react';

function Ingredients() {
   
        return (
            <section>
            <div>
            <h2>Ingredients:</h2>
            <ul>
            <li>Almond milk</li>
            <li>Banana</li>
            <li>Blueberries</li>
            </ul>
            </div>

            <div className="ingredient">
            <input type="checkbox"  name="ingredient" value="Banana" />Banana
            <input type="checkbox"  name="ingredient" value="Banana" />Banana
            <input type="checkbox"  name="ingredient" value="Banana" />Banana
            </div>

            <div>
            <button>Add  all ingredients to shopping list</button>
            </div>

            </section>
            

        );

}



export default Ingredients;