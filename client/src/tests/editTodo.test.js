import { render, screen } from "@testing-library/react"
import axiosMock from 'axios';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from 'react-router-dom';
import EditTodo from '../components/todoComponents/EditTodo';

describe(`Edit to-do tests`, () => {

    beforeEach(() => {
        render(<MemoryRouter><EditTodo /></MemoryRouter>)
    });

    it(`should render the edit to-do form`, () => {
        const { container } = render(<EditTodo />);
        const editForm = container.querySelector(`form`);

        expect(editForm).toBeTruthy();
    });

    it(`should have the expected heading`, () => {
        const heading = screen.getByRole(`heading`);

        expect(heading.textContent).toContain(`Edit your task here`);
    });

    it(`should have a delete button`, () => {
        const deleteBtn = screen.getByDisplayValue(/delete/i);

        expect(deleteBtn).toBeInTheDocument();
    });

    // it(`should call mock delete once`, () => {
    //     const deleteBtn = screen.getByDisplayValue(/delete/i);

    //     act(() => {
    //         userEvent.click(deleteBtn);
    //     });

    //     expect(axiosMock.delete).toHaveBeenCalledTimes(1);
    // });

    it(`should call mock put once`, () => {
        const mockBody = `I'm an edit`;

        const submit = screen.getByDisplayValue(/confirm changes/i);
        const input = screen.getByPlaceholderText(/edit your task here/i);

        act(() => {
            userEvent.type(input, mockBody);
            userEvent.click(submit);
        });

        expect(axiosMock.put).toHaveBeenCalledTimes(1);
    });
});