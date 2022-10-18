import EachTodo from './EachTodo';

const AllTodos = ({ todos }) => {

    return (
        todos.map(todo => {
            const { id, body, todoStatus, deadline } = todo;
            const todosProps = {
                id,
                body,
                todoStatus,
                deadline
            };
            return (
                <>
                    <EachTodo
                        todosProps={todosProps} />
                </>
            )
        }
        ))
};

export default AllTodos;