import React from 'react';
import styles from './card.module.css';

function InfoCard(props) {
  return (
    <section className={styles.cardWrapper}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80"
          alt="vegetarian-meal"
        />
      </div>
      <div>
        <h1>{props.title}</h1>
        <h3>{props.text}</h3>
        <button>{props.button}</button>
      </div>
      ;
    </section>
  );
}

export default InfoCard;
