import React from 'react';
import styles from './Hero.module.css';
import logo from '../../img/logo.png';

function Hero() {
  return (
    <main className={styles}>
      <div>
        <h1>Welcome to Plantasty</h1>
        <h2 className={styles.titleHero}>
          Thinking of eating less meat? Start your journey with Plantasty.
          Personalised daily meals at just one click away.
        </h2>
      </div>
      <div>
        <img
          className={styles.imgHero}
          // src="https://images.unsplash.com/photo-
          // 1538472861466-364b23ad4286?ixid=MnwxMjA3fDB8MHxwaG90by
          // 1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          src={logo}
          alt="vegetarian-meal"
        />
      </div>
    </main>
  );
}

export default Hero;
