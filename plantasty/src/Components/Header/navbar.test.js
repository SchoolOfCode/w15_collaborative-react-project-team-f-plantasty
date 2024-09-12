import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


import '@testing-library/jest-dom/extend-expect';

import Navbar from './Navbar';


test(`Navbar should render onto the DOM`, () => {
    const { getByTestId} = render (
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
    const actual = getByTestId('navbar');
    expect(actual).toBeInTheDocument();
});