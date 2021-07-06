import React from 'react';
import styles from './card.module.css';
import TextButton from '../TextButton';
// Display card for home stuff

function DisplayCard() {
  return (
    <section className={styles.cardWrapper}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80"
          alt="vegetarian-meal"
        />
      </div>
      <div>
        <h2>Cut down on meat with our tailored meal plans</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <TextButton text={'Create my meal plan'} />
      </div>
    </section>
  );
}

export default DisplayCard;
