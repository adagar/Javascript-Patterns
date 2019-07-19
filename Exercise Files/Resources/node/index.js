import express from 'express';
import calc from './calc';

const app = express();
const PORT = 3000;
const aNum = calc();

app.get('/', (req, res) =>
    res.send(`Showing number from calc: ${aNum}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);