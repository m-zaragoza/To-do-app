import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    _id: {

    },
    user: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9!?.@_', ]*$/]
    },
    todoStatus: {
        type: String,
        default: `new`,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }
});

const Todo = mongoose.model(`Todo`, todoSchema);

export default Todo;