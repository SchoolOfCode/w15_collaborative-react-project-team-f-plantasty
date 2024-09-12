import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


import '@testing-library/jest-dom/extend-expect';

import Hero from '.';


test(`Hero card should render onto the DOM`, () => {
    const { getByTestId} = render (
        <BrowserRouter>
            <Hero />
        </BrowserRouter>
    );
    const actual = getByTestId('hero');
    expect(actual).toBeVisible();
});