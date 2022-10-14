import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.get(`/`, (req, res) => {
    res.send(`I work!!`);
})

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server running on http://${SERVERHOST}:${SERVERPORT}`);
});
