import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import { router as allTodos } from './routes/index.js';
import { router as addTodo } from './routes/add.js';
import { router as editTodo } from './routes/edit.js';
import { router as register } from './routes/register.js';
import { router as login } from './routes/login.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan(`tiny`));

app.use(`/`, allTodos);
app.use(`/add`, addTodo);
app.use(`/edit`, editTodo);
app.use(`/register`, register);
app.use(`/login`, login);

const main = async () => {
    await mongoose.connect(process.env.DB_URI).then(res => {
        console.log(`Connected to DB`)
    });
};

await main()
    .catch(err => console.log(err));

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server running on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;