const express = require('express');
const products = require('./app/messages');

const app = express();
const port = 8000;

app.use(express.json());

app.use('/messages', products);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/`);
});