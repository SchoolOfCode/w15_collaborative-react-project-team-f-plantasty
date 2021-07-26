import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import FavouriteRecipeCard from '.';

test(`Favourite recipe card should render on the DOM`, () => {
    const { getByTestId } = render(<FavouriteRecipeCard />);
    const actual = getByTestId('favourite-card');
    expect(actual).toBeInTheDocumet();
});