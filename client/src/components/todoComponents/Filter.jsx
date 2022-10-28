import axios from 'axios';
import { useEffect, useState } from 'react';
import AllTodos from "./AllTodos"

const Filter = ({ url }) => {

    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState(`all to-dos`);

    const filterRes = (chosenFilter, resData) => {
        const filteredTodos = chosenFilter === `all to-dos` ? resData : resData.filter(todo => todo.todoStatus === chosenFilter);
        setTodos(filteredTodos);
    };

    const filterHandler = e => {
        setFilter(e.target.value);
    };

    const getData = async () => {
        try {
            await axios.get(url)
                .then(res => filterRes(filter, res.data))
        } catch (err) {
            alert(`Something went wrong: ${err.message}`);
        }
    };

    useEffect(() => {
        getData()
    }, [filter]);

    return (
        <>
            <div className="d-flex">
                <h1>Your to-do list</h1>
                <select className="form-select" aria-label="Default select example" onChange={filterHandler} defaultValue={filter}>
                    <option hidden >Filter</option>
                    <option value="all to-dos">All to-dos</option>
                    <option value="new">New</option>
                    <option value="in progress">In-progress</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <AllTodos todos={todos} />
        </>
    );
};

export default Filter;

