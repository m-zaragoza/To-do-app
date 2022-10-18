import { render, screen } from '@testing-library/react';
import axiosMock from 'axios';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import AddTodo from '../components/todoComponents/AddTodo';


describe(`Add to-do tests`, () => {

    beforeEach(() => {
        render(<AddTodo />)
    });

    it(`should render the add to-do form`, () => {
        const { container } = render(<AddTodo />);
        const form = container.querySelector(`form`);

        expect(form).toBeTruthy();
    });

    it(`should have the expected heading`, () => {
        const heading = screen.getByRole(`heading`);

        expect(heading.textContent).toContain(`What do you need to do`);
    });

    it(`should call mock post once`, () => {
        const mockBody = `I'm a test to-do`;

        const submit = screen.getByDisplayValue(/add to-do/i);
        const input = screen.getByPlaceholderText(/what do you need to do?/i);

        act(() => {
            userEvent.type(input, mockBody);
            userEvent.click(submit);
        });

        expect(axiosMock.post).toHaveBeenCalledTimes(1);
    });
});