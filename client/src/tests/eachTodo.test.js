import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EachTodo from '../components/todoComponents/EachTodo';

xdescribe(`Each to-do component tests`, () => {

    const testTodo = {
        _id: 0,
        user: `test@email.com`,
        body: `I'm a test to-do`,
        todoStatus: `new`,
        deadline: `2025-11-15T15:00:00.000Z`
    };

    beforeEach(() => {
        render(<MemoryRouter><EachTodo todosProps={testTodo} /></MemoryRouter>);
    });

    it(`should render the to-do body`, () => {
        const todoBody = screen.getByText(`I'm a test to-do`);

        expect(todoBody).toBeInTheDocument();
    });

    it(`should render the to-do status`, () => {
        const testStatus = screen.getByText(`new`);

        expect(testStatus).toBeInTheDocument();
    });

    it(`should render an 'edit' button per to-do`, () => {
        const numEdit = screen.getAllByRole(`button`).length;

        expect(numEdit).toBe(1);
    })
});