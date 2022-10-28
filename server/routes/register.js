import express from 'express';
import User from '../models/user.model.js';

export const router = express.Router();

router.route(`/`)
    .post((req, res) => {
        const { user } = req.body;

        User.findOne({ user }, (err, user) => {
            if (!user) {
                const userToAdd = new User(req.body);
                userToAdd.save()
                    .then(() => res.status(200).json({ "message": "You are registered successfully" }))
                    .catch(err => res.status(422).json({ "message": "Unable to register" }))
            } else {
                res.send({ message: `This user already exists` })
            }
        });
    });