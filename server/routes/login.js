import express from 'express';
import User from '../models/user.model.js';

export const router = express.Router();

router.route(`/`)
    .post((req, res) => {
        const { user, password } = req.body;

        User.findOne({ user }, (err, user) => {
            if (user && password === user.password) {
                res.status(200).send({ message: `Good to see you again`, user });
            } else {
                res.send({ message: `Details not found` });
            }
        });
    });