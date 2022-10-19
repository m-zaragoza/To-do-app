import express from 'express';
import Todo from '../models/todo.model.js';

export const router = express.Router();

router.route(`/:_id`)
    .get((req, res) => {
        const _id = req.params._id;

        Todo.findById(_id, (err, todo) => {
            todo ? res.json(todo) : res.status(404).json({ "message": "To-do not found" });
        });
    })
    .put((req, res) => {
        const _id = req.params._id;

        Todo.findById(_id, (err, todo) => {
            if (todo) {
                todo.body = req.body.body;
                todo.todoStatus = req.body.todoStatus;
                todo.deadline = req.body.deadline;

                todo.save()
                    .then(() => res.status(201).json({ "message": "To-do updated successfully" }))
                    .catch(err => res.status(400).json({ "message": "Unable to update to-do" }));
            } else {
                res.status(404).json({ "message": "To-do not found" });
            }
        });
    })
    .delete((req, res) => {
        const _id = req.params._id;

        Todo.findByIdAndDelete(_id, (err, todo) => {
            if (todo) {
                res.status(204).json();
            } else {
                res.status(404).json({ "message": "To-do not found" });
            }
        });
    });
