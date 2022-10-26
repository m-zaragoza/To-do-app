import { render, screen } from '@testing-library/react';
import axiosMock from 'axios';
import { MemoryRouter } from 'react-router-dom';
import Filter from '../components/todoComponents/Filter';

describe(`Filter tests`, () => {

    beforeEach(() => {
        render(<MemoryRouter><Filter /></MemoryRouter>);
    });

    it(`should have the right heading`, () => {

        const heading = screen.getByRole(`heading`);

        expect(heading.textContent).toContain(`Your to-do list`);
    });

    it(`should call GET once`, async () => {

        expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });
});