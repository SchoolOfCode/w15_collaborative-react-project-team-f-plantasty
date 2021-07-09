import React from 'react';
import { Link } from 'react-router-dom';
import MultipleChoiceForm from '../Components/MultipleChoiceForm';

let intolerances = [
  'Dairy',
  'Egg',
  'Gluten',
  'Grain',
  'Peanut',
  'Seafood',
  'Sesame',
  'Shellfish',
  'Soy',
  'Sulfite',
  'Tree Nut',
  'Wheat',
];

function Q2() {
  let userAllergy = [];
  function handleClick(event) {
    userAllergy.push(event); // add selected allergy to user array to use later
    console.log(userAllergy);
  }

  return (
    <div>
      <h1>INTOLERANCES</h1>
      {intolerances.map((allergy) => (
        <MultipleChoiceForm
          text={allergy}
          value={allergy}
          handleChange={handleClick}
        />
      ))}
      <Link to={'/myPlan'}>
        <button> Generate plan </button>
      </Link>
    </div>
  );
}

export default Q2;
