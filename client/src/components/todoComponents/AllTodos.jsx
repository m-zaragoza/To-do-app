import EachTodo from './EachTodo';

const AllTodos = ({ todos }) => {
    // console.log(todos);
    return (
        todos.map(todo => {
            const { _id, body, todoStatus, deadline } = todo;
            const todosProps = {
                _id,
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