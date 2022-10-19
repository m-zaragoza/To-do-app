import { useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-date-picker";
// import TodoModel from "../../utils/TodoModel";
import axios from "axios";
import { useEffect } from "react";

const EditTodo = ({ url }) => {

    const { _id } = useParams();

    // const [user, setUser] = useState(``);
    const [body, setBody] = useState(``);
    const [todoStatus, setTodoStatus] = useState(``);
    const [deadline, setDeadline] = useState(new Date());
    const [id, setId] = useState(``);

    const getData = async () => {
        try {
            await axios.get(`${url}/edit/${_id}`)
                .then(response => {
                    const res = response.data;
                    // setUser(res.user);
                    setBody(res.body);
                    setTodoStatus(res.todoStatus);
                    setDeadline(res.deadline);
                    setId(res._id);
                })
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    useEffect(() => {
        getData()
    }, []);

    const putHandler = e => {
        e.preventDefault();
        const editedTodo = { id, body, todoStatus, deadline };
        putTodo(editedTodo);
    };

    const putTodo = async todo => {
        await axios.put(`${url}/edit/${_id}`, todo);
    };

    const deleteHandler = () => { };

    return (
        <>
            <h1>Edit your task here</h1>
            <form onSubmit={putHandler}>
                <div className="form-floating ps-5 pe-5">
                    <textarea className="form-control" value={body} onChange={e => setBody(e.target.value)} placeholder="Edit your task here" id="floatingTextarea2" required></textarea>
                </div>
                <div className="pt-3 ps-5 ms-1 row">
                    <DatePicker selected={deadline} onChange={date => setDeadline(date)} />
                    <select className="form-select" defaultValue={todoStatus} onChange={e => (e.target.value)}>
                        <option hidden >Status</option>
                        <option value="new">New</option>
                        <option value="in progress">In progress</option>
                        <option value="done">Done</option>
                    </select>
                    <input type="button" value="Delete" className="btn col-md-auto py-3 px-3" onClick={deleteHandler} />
                    <input type="submit" value="Confirm changes" className="btn col-md-auto py-3 px-3" />
                </div>
            </form>
        </>
    )
};

export default EditTodo;