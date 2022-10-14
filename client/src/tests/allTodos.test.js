import { render, screen, waitFor } from '@testing-library/react';
import axiosMock from 'axios';
import AllTodos from '../components/todoComponents/AllTodos';
import mockTodos from '../components/mockTodos.json';

describe(`All todos tests`, () => {
    const todos = mockTodos.todos;

    it(`should render the right amount of todos`, async () => {
        axiosMock.get.mockResolvedValueOnce({ todos });

        render(<AllTodos />);

        const numOfTodos = await waitFor(() => screen.getAllByText(/edit/i).length);

        expect(numOfTodos).toBe(todos.length);
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });
});