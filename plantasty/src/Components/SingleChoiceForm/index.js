import React from 'react';

// function SingleChoiceForm(props) {
//   return (
//     <section>
//       <div>
//         <h1>{props.text}</h1>
//         <h2>{props.text}</h2>
//       </div>
//       <div></div>
//     </section>
//   );
// }

// export default SingleChoiceForm;

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
