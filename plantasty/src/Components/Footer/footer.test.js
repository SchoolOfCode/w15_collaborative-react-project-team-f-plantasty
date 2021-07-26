import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from '.';

test(`Footer should render on the DOM`, () => {
    const { getByTestId } = render(<Footer />);
    const actual = getByTestId('footer');
    expect(actual).toBeInTheDocumet();
});