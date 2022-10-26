import axios from 'axios';
import { useEffect, useState } from 'react';
import AllTodos from "./AllTodos"

const Filter = ({ url }) => {

    const [todos, setTodos] = useState([]);

    const getData = async () => {
        try {
            await axios.get(url)
                .then(res => {
                    setTodos(res.data);
                })
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <h1>Your to-do list</h1>
            <AllTodos todos={todos} />
        </>
    );
};

export default Filter;