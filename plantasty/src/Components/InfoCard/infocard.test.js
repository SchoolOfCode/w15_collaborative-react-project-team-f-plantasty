import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


import '@testing-library/jest-dom/extend-expect';

import InfoCard from '.';

test(`Navbar should render onto the DOM`, () => {
    const { getByTestId} = render (
        <BrowserRouter>
            <InfoCard />
        </BrowserRouter>
    );
    const actual = getByTestId('info-card');
    expect(actual).toBeInTheDocument();
});

const testProps = {
    title: 'test'
}

test(`given props of text, infocard title should render with the correct text`, () => {
    const { getByTestId } = render (
        <BrowserRouter>
            <InfoCard {...testProps} />
        </BrowserRouter>
    );
    const actual = getByTestId('title');
    expect(actual).toHaveTextContent('test');
});