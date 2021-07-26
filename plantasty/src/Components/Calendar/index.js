import React from 'react';
import { Link } from 'react-router-dom';
import style from '../TextButton/button.module.css';

function Calendar(props) {
  return (
    <div data-testid="calendar-container">
    <Link  to={'/myplan'}>
      <button data-testid="button"
        className={style.textButton}
        value={props.value}
        onClick={(event) => props.getDay(event.target.value)}
      >
        {props.text}
      </button>
    </Link>
    </div>
  );
}

export default Calendar;

/*       
      <Link to={'/myplan'}>
        <TextButton text={'Tuesday'} />
      </Link>
      <Link to={'/myplan'}>
        <TextButton text={'Wednesday'} />
      </Link>
      <Link to={'/myplan'}>
        <TextButton text={'Thursday'} />
      </Link>
      <Link to={'/myplan'}>
        <TextButton text={'Friday'} />
      </Link>
      <Link to={'/myplan'}>
        <TextButton text={'Saturday'} />
      </Link>
      <Link to={'/myplan'}>
        <TextButton text={'Sunday'} />
      </Link> */
