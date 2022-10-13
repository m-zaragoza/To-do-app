import mockTodos from '../mockTodos.json'
import EachTodo from './EachTodo';

const AllTodos = () => {
    return (
        mockTodos.todos.map(todo => {
            const { id, body, todoStatus, deadline } = todo;
            const todos = {
                id,
                body,
                todoStatus,
                deadline
            };
            return (
                <>

                    <EachTodo
                        key={id}
                        todos={todos} />

                </>
            )
        }
        ))
};

export default AllTodos;