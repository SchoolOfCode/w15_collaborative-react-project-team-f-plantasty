import React from 'react';

export default function CaloriesInput({ handleChange }) {
  return (
    <div>
      <input
        type="number"
        placeholder="Calories e.g 2000"
        onchange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
}
