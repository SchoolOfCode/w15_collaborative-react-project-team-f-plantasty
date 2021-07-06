import React, { useState } from 'react';
import styles from './MultipleChoiceForm.module.css';

function MultipleChoiceForm(props) {

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
