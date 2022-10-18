import { render, screen, waitFor } from '@testing-library/react';
import AllTodos from '../components/todoComponents/AllTodos';
import mockTodos from './mockTodos.json';

describe(`All todos tests`, () => {
    const todos = mockTodos.todos;

    it(`should render the right amount of todos`, () => {
        render(<AllTodos todos={todos} />);

        const numOfTodos = screen.getAllByText(/edit/i).length;

        expect(numOfTodos).toBe(todos.length);
    });
});