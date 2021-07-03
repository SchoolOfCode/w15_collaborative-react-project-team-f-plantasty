import IconButton from '../IconButton';
import styles from './MiniRecipeCard.module.css';

function MiniRecipeCard() {

    return (
        <div className={styles.mrcWholeContainer}>
            <div className={styles.mrcSubContainer}>
                <h3 className={styles.miniRecipeCardHeading}>[insert_recipe_title]</h3>
                <div className={styles.leftColumn}>
                    <div className={styles.iconBackground}>
                    {/* <img className={styles.healthIcon}>
                        </img> */}
                    </div>
                    <div className={styles.iconBackground}>
                        {/* <img className={styles.proteinIcon}>
                        </img> */}
                    </div>
                </div>
                <div className={styles.middleColumn}>
                    {/* <img className={styles.recipeImage}>
                        [insert_recipe_image]
                    </img> */}
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.iconBackground}>
                        {/* <img className={styles.cookingTimeIcon}>
                        </img> */}
                    </div>
                    <div className={styles.iconBackground}>
                        {/* <img className={styles.carbonFootprintIcon}>
                        </img> */}
                    </div>
                </div>
                <h4 className={styles.mealType}>
                    [insert_meal_type]
                </h4>
            </div>
            <div className={styles.mrcSwapContainer}>
                <IconButton/ >
            </div>
        </div>
    )
}

export default MiniRecipeCard;