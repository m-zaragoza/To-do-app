import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import axiosMock from 'axios';
import { act } from "react-dom/test-utils";
import Login from '../components/userComponents/Login';

describe(`Login tests`, () => {

    beforeEach(() => {
        render(<MemoryRouter><Login /></MemoryRouter>)
    });

    it(`should have a submit button`, () => {
        const button = screen.getByRole(`button`);

        expect(button).toBeInTheDocument();
    });

    it(`should have the expected heading`, () => {
        const heading = screen.getByRole(`heading`);

        expect(heading.textContent).toContain(`Welcome back`);
    });

    it(`should call mock post once`, () => {
        const mockUser = `test@email.com`;
        const mockPassword = `1Password!`;

        const submit = screen.getByRole(`button`);
        const userInput = screen.getByLabelText(/your email/i);
        const passwordInput = screen.getByLabelText(/your password/i);

        act(() => {
            userEvent.type(userInput, mockUser);
            userEvent.type(passwordInput, mockPassword);
            userEvent.click(submit);
        });

        expect(axiosMock.post).toHaveBeenCalledTimes(1);
    });

});