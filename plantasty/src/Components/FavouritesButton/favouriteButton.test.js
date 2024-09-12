import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import FavouritesButton from '.';

const testProps = {
    handleclick: jest.fn()
};

test(`Given a prop of a handleClick function, when clicked, Favourites Button should call the handleclick function`, () => {
const {getByTestId} = render(<FavouritesButton {...testProps} />);
const renderedButton = getByTestId('favourite-button');
fireEvent.click(renderedButton);
expect(testProps.handleClick).toHaveBeenCalled();
});

