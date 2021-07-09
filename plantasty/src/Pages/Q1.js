import { Link } from 'react-router-dom';
import SingleChoiceForm from '../Components/SingleChoiceForm';

function Q1() {
  return (
    <div>
      <h1>THIS IS SINGLE CHOICE FORM</h1>
      <SingleChoiceForm />
      <Link to="/createPlan/q2">
        <button type="button">Next question</button>
      </Link>
    </div>
  );
}

export default Q1;
