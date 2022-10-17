import { render, screen } from '@testing-library/react';

import AddTodo from '../components/todoComponents/AddTodo';

describe(`Add to-do tests`, () => {

    beforeEach(() => {
        render(<AddTodo />)
    });

    it(`should have a submit button`, () => {
        const button = screen.getByRole(`button`);

        expect(button).toBeInTheDocument();
    });

    it(`should have the expected heading`, () => {
        const heading = screen.getByRole(`heading`);

        expect(heading.textContent).toContain(`What do you need to do`);
    })

});