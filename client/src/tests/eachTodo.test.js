import { render, screen } from '@testing-library/react';
import EachTodo from '../components/todoComponents/EachTodo';

describe(`Each to-do component tests`, () => {

    const testTodo = {
        id: 0,
        user: `test@email.com`,
        body: `I'm a test to-do`,
        status: `new`,
        deadline: `2025-11-15T15:00:00.000Z`
    };

    beforeEach(() => {
        render(<EachTodo todos={testTodo} />);
    });

    it(`should render the to-do body`, () => {
        const todoBody = screen.getByText(`I'm a test to-do`);

        expect(todoBody).toBeInTheDocument();
    });
});