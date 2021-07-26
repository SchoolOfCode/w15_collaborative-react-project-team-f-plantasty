import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter  } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Calendar from '.';


test (`The calendar component renders within the calendar container`, () => {
    const { getByTestId } = render(<BrowserRouter> <Calendar />  </BrowserRouter>);
    const actual = getByTestId('calendar-container');
    expect(actual).toBeInTheDocumet();
});

const testProps = {
    handleclick: jest.fn()
};

test(`Given a prop of a handleClick function, when clicked, Calendar should call the handleclick function`, () => {
const {getByTestId} = render(<Calendar {...testProps} />);
const renderedButton = getByTestId('button');
fireEvent.click(renderedButton);
expect(testProps.handleClick).toHaveBeenCalled();
});


