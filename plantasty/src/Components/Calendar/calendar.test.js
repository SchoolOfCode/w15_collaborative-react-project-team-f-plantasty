import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Calendar from '.';


test (`The calendar component renders within the calendar container`, () => {
    const { getByTestId } = render(<Router> <Link><Calendar /> </Link> </Router>);
    const actual = getByTestId('calendar-container');
    expect(actual).toBeInTheDocumet();
});

const testProps = {
    onclick: jest.fn()
};

test(`Given a prop of a handleClick function, when clicked, Calendar should call the handleclick function`, () => {
const {getByTestId} = render(<Calendar {...testProps} />);
const renderedButton = getByTestId('button');
fireEvent.click(renderedButton);
expect(testProps.handleClick).toHaveBeenCalled();
});


