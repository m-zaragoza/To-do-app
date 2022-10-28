import express from 'express';
import Todo from '../models/todo.model.js';

export const router = express.Router();

router.route(`/`)
    .get((req, res) => {

        Todo.find().sort({ deadline: 1 }).find((error, todos) => {
            error ? res.status(404).json.send({ "message": "Todos not found" }) : res.json(todos);
        });
    });