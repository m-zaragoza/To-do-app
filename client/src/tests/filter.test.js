import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axiosMock from 'axios';
import { act } from 'react-dom/test-utils';
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

    it(`should display a dropdown element`, () => {
        const filter = screen.getByDisplayValue(/all to-dos/i);
        const inProgress = screen.getByText(/in-progress/i);
        const newOpt = screen.getByText(/new/i);
        const done = screen.getByText(/done/i);

        act(() => {
            userEvent.click(filter);
        });

        expect(inProgress).toBeInTheDocument();
        expect(newOpt).toBeInTheDocument();
        expect(done).toBeInTheDocument();
    });
});