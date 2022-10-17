import axios from 'axios';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import TodoModel from '../../utils/TodoModel';

const AddTodo = ({ url }) => {

    const [body, setBody] = useState(``);
    const [deadline, setDeadline] = useState(new Date());
    const user = `developer@email.com`;


    const bodyHandler = e => {
        setBody(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();
        const newTodo = new TodoModel(user, body, `new`, deadline);
        postTodo(newTodo);
    };

    const postTodo = async todo => {
        await axios.post(`${url}/add`, todo);
        resetTodo();
    };

    const resetTodo = () => {
        setBody(``);
        setDeadline(new Date());
    };

    return (
        <>
            <h1>What do you need to do?</h1>
            <form onSubmit={submitHandler}>
                <div className="form-floating ps-5 pe-5">
                    <textarea onChange={bodyHandler} className="form-control" placeholder="What do you need to do?" id="floatingTextarea2" required></textarea>
                </div>
                <div className="pt-3 ps-5 ms-1 row">
                    <DatePicker selected={deadline} onChange={(date) => setDeadline(date)} />
                    <input type="submit" value="Add to-do" className="btn col-md-auto py-3 px-3" />
                </div>
            </form>
        </>
    )
};

export default AddTodo;