import { Link } from 'react-router-dom';
import MultipleChoiceForm from '../Components/MultipleChoiceForm';
import SingleChoiceForm from '../Components/SingleChoiceForm';
import CaloriesInput from '../Components/CaloriesInput';
import TextButton from '../Components/TextButton';
import styles from '../Components/MultipleChoiceForm/MultipleChoiceForm.module.css';
import style from '../Components/FullRecipeCard/RecipeCard.module.css';
let intolerances = [
  'dairy',
  'egg',
  'gluten',
  'grain',
  'peanut',
  'seafood',
  'sesame',
  'shellfish',
  'soy',
  'sulfite',
  'tree nut',
  'wheat',
];

let diet = [
  'vegan',
  'vegetarian',
  'lacto-vegetarian',
  'ovo-vegetarian',
  'pescetarian',
];

function CreateMealPlan(props) {
  return (
    <div>
      <section className={styles.cardWrap2}>
        <h1>What is your dietary preference?</h1>
        <h2>Select the one that applies</h2>
        {diet.map((diet, index) => (
          <SingleChoiceForm
            text={diet}
            value={diet}
            getValue={props.updateDiet}
            key={index}
          />
        ))}
      </section>
      <section className={styles.cardWrap2}>
        <h1>Do you have any of the following food intolerances?</h1>
        <h2>Select all that apply</h2>
        {intolerances.map((allergy, index) => (
          <MultipleChoiceForm
            text={allergy}
            value={allergy}
            getValue={props.updateAllergy}
            key={index}
          />
        ))}
      </section>
      <section className={style.recipeContainer}>
        <h1>What is your calorie target for the day?</h1>
        <h2>Use input to type in your desires calorie intake</h2>
        <CaloriesInput handleChange={props.updateCalories} />
      </section>
      <section>
        <Link to={'/myplan'}>
          <TextButton text={'Generate plan'} />
        </Link>
      </section>
    </div>
  );
}

export default CreateMealPlan;
