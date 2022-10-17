import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

const main = async () => {
    console.log(`Connecting to db: ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
};

main()
    .catch(err => console.log(err));

app.get(`/`, (req, res) => {
    res.send(`I work!!`);
})

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server running on http://${SERVERHOST}:${SERVERPORT}`);
});
