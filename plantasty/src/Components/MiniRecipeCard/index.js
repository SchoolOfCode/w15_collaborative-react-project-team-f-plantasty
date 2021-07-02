import IconButton from `../IconButton`;
//import `./MiniRecipeCard.module.css`;

function MiniRecipeCard() {

    return (
        <div className="mrc-whole-container">
            <div className="mrc-sub-container">
                <h3 className="mini-recipe-card-heading">[insert_recipe_title]</h3>
                <div className="left-column">
                    <div className="icon-background">
                        <img className="health-icon">

                        </img>
                    </div>
                    <div className="icon-background">
                        <img className="protein-icon">

                        </img>
                    </div>
                </div>
                <div className="middle-column">
                    <img className="recipe-image">
                        [insert_recipe_image]
                    </img>
                </div>
                <div className="right-column">
                    <div className="icon-background">
                        <img className="cooking-time-icon">

                        </img>
                    </div>
                    <div className="icon-background">
                        <img className="carbon-footprint-icon">

                        </img>
                    </div>
                </div>
                <h4 className="meal-type">
                    [insert_meal_type]
                </h4>
            </div>
            <div className="mrc-swap-container">
                <IconButton/ >
            </div>
        </div>  
    )
}
