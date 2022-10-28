import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import axiosMock from 'axios';
import Register from '../components/userComponents/Register';

describe(`Register tests`, () => {

    beforeEach(() => {
        render(<MemoryRouter><Register /></MemoryRouter>)
    });

    it(`should have a submit button`, () => {
        const button = screen.getByRole(`button`);

        expect(button).toBeInTheDocument();
    });

    it(`should have the expected heading`, () => {
        const heading = screen.getByRole(`heading`);

        expect(heading.textContent).toContain(`Register here`);
    });

    it(`should call mock post once`, () => {
        const mockUser = `test@email.com`;
        const mockPassword = `1Password!`;

        const submit = screen.getByRole(`button`);
        const userInput = screen.getByLabelText(/your email/i);
        const passwordInput = screen.getByLabelText(/choose a password/i);

        act(() => {
            userEvent.type(userInput, mockUser);
            userEvent.type(passwordInput, mockPassword);
            userEvent.click(submit);
        });

        expect(axiosMock.post).toHaveBeenCalledTimes(1);
    });
});