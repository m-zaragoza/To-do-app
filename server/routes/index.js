import express from 'express';
import Todo from '../models/todo.model.js';

export const router = express.Router();

router.route(`/`)
    .get((req, res) => {

        Todo.find((error, todos) => {
            if (error) {
                res.status(404).send(`Todos not found`);
                console.log(error);
            } else {
                res.json(todos);
            }
            // error ? res.status(404).send(`Todos not found`) : res.json(todos);
        });
    });