import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AllTodos from '../components/todoComponents/AllTodos';
import mockTodos from './mockTodos.json';

xdescribe(`All todos tests`, () => {
    const todos = mockTodos.todos;

    it(`should render the right amount of todos`, () => {
        render(<MemoryRouter><AllTodos todos={todos} /></MemoryRouter>);

        const numOfTodos = screen.getAllByText(/edit/i).length;

        expect(numOfTodos).toBe(todos.length);
    });
});