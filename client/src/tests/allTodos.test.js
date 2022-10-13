import { render, screen } from '@testing-library/react';
import AllTodos from '../components/todoComponents/AllTodos';
import mockTodos from '../components/mockTodos.json';

describe(`All todos tests`, () => {
    it(`should render the right amount of todos`, () => {
        render(<AllTodos />)
        const numOfTodos = screen.getAllByText(/edit/i).length;
        const numOfMockTodos = mockTodos.todos.length;

        expect(numOfTodos).toEqual(numOfMockTodos);
    })
})