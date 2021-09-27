import React from 'react';
import style from '../TextButton/button.module.css';

function SingleChoiceForm(props) {
  return (
    <button
      className={style.textButton}
      value={props.value}
      onClick={(event) => props.getValue(event.target.value)}
    >
      {props.text}
    </button>
  );
}

export default SingleChoiceForm;
