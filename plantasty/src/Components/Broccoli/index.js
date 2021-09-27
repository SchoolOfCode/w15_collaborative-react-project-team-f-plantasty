import React from 'react';
import broccoli from './walking-broccoli.gif';
import styles from './loading.module.css';

function Broccoli() {
  return (
    <div className={styles.cardWrapper}>
      <h2>Preparing your meal plan</h2>
      <img src={broccoli} alt="loading..." />
    </div>
  );
}

export default Broccoli;
