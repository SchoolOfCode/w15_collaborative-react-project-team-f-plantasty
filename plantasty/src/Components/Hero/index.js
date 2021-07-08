import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <main className={styles}>
      <div>
        <h1>THIS IS THE HERO</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      </div>
      <div>
        <img
          className={styles.imgHero}
          src="https://images.unsplash.com/photo-1538472861466-364b23ad4286?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="vegetarian-meal"
        />
      </div>
    </main>
  );
}

export default Hero;
