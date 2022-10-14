import axios from 'axios';
import { useEffect, useState } from 'react';
import EachTodo from './EachTodo';

const AllTodos = () => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        const res = await axios.get(`http://localhost:4000/todos`);
        return res.data;
    };

    useEffect(() => {
        const getData = async () => {
            setTodos(await getTodos());
        }
        getData();
    }, []);

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
                        // key={id}
                        todosProps={todosProps} />
                </>
            )
        }
        ))
};

export default AllTodos;