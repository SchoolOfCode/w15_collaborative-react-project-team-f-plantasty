// for intolerances
import React, { useState } from 'react';
// import Card from '../../UI/CardLayout/Card';
import styles from './MultipleChoiceForm.module.css';

function MultipleChoiceForm(props) {
//   function handleClick(event) {
//     console.log(event.target.value);
//   }
  return (
    <button
      className={styles.cardWrapper}
      value={props.value}
      onClick={(event) => props.handleChange(event.target.value)}
    >
      {props.text}
    </button>
  );
}

export default MultipleChoiceForm;
