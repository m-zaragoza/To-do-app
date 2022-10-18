import express from 'express';
import Todo from '../models/todo.model.js';

export const router = express.Router();

router.route(`/`)
    .post((req, res) => {
        const todoToAdd = new Todo(req.body);

        todoToAdd.save()
            .then(() => res.status(201).json({ "message": "To-do added successfully" }))
            .catch(err => res.status(422).json({ "message": "Unable to add to-do" }));
    });