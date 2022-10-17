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

});