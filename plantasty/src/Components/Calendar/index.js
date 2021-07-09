import React from 'react';
import { Link } from 'react-router-dom';
import TextButton from '../TextButton';

export default function Calendar() {
  return (
    <div>
      <Link to={'/myplan'}>
        <TextButton text={'Monday'} />
      </Link>
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
      </Link>
    </div>
  );
}
