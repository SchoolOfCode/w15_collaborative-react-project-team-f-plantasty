import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import FullRecipeCard from '.';

const testProps = {
    meal: 'test', 
}

test(`Full recipe card should render on the DOM`, () => {
    const { getByTestId } = render(<FullRecipeCard  {...testProps} />);
    const actual = getByTestId('recipe-card');
    expect(actual).toBeInTheDocumet();
});

