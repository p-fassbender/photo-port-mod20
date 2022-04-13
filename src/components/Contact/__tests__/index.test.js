import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => { render(<ContactForm></ContactForm>); })

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact></Contact>);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('title is visible', () => {
    it('renders', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('contactTitle')).toHaveTextContent('Contact me')
    })
})

describe('submit button is visible', () => {
    it('renders', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('contactFormSubmit')).toHaveTextContent('Submit')
    })
})