import React from 'react';
import cookingGif from './loading.gif';
import styles from './loading.module.css';

function Loading() {
  return (
    <div className={styles.cardWrapper}>
      <h2>Preparing your meal plan</h2>
      <img src={cookingGif} alt="loading..." />
    </div>
  );
}

export default Loading;
