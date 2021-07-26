import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Calendar from '.';


test (`The calendar component renders within the calendar container`, () => {
    const { getByTestId } = render(<Router> <Link><Calendar /> </Link> </Router>);
    const actual = getByTestId('calendar-container');
    expect(actual).toBeInTheDocumet();
});



