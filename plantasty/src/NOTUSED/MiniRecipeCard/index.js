import React from 'react';
import styles from './MiniRecipeCard.module.css';
import TextButton from '../../Components/TextButton';

function MiniRecipeCard(props) {
  return (
    <div className={styles.mrcWholeContainer}>
      <div className={styles.mrcSubContainer}>
        <h3 className={styles.miniRecipeCardHeading}>{props.text}</h3>
        <div className={styles.leftColumn}>
          <div className={styles.iconBackground}>
            <img
              className={styles.Icon}
              src="https://image.shutterstock.com/image-vector/continuous-one-line-drawing-burger-600w-1005965494.jpg"
              alt="icon"
            />
          </div>
          <div className={styles.iconBackground}>
            <img
              className={styles.Icon}
              src="https://image.shutterstock.com/image-vector/continuous-one-line-drawing-burger-600w-1005965494.jpg"
              alt="icon"
            />
          </div>
        </div>
        <div className={styles.middleColumn}>
          <img
            className={styles.recipeImage}
            src="https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-jumbo.jpg?quality=90"
            alt="recipeImage"
          />
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.iconBackground}>
            <img
              className={styles.Icon}
              src="https://image.shutterstock.com/image-vector/continuous-one-line-drawing-burger-600w-1005965494.jpg"
              alt="icon"
            />
          </div>
          <div className={styles.iconBackground}>
            <img
              className={styles.Icon}
              src="https://image.shutterstock.com/image-vector/continuous-one-line-drawing-burger-600w-1005965494.jpg"
              alt="icon"
            />
          </div>
        </div>
        <h4 className={styles.mealType}>[insert_meal_type]</h4>
      </div>
      <div className={styles.mrcSwapContainer}>
        <TextButton text={'SWAP'} />
      </div>
    </div>
  );
}

export default MiniRecipeCard;
