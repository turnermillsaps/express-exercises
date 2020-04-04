const express = require('express');
const app = express();
let counter = 0;

// POST path for increment
app.post('/increment', (req, res) => {
    res.send('Incremented counter by 1');
    counter++;
})

// POST path for decrement
app.post('/decrement', (req, res) => {
    res.send('Decremented counter by 1');
    counter--;
})

// GET path to return counter
app.get('/value', (req, res) => {
    res.send(`Current counter value is: ${counter}`);
})

app.listen(3000, () => {
    console.log('Counting Server started...');
})