const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    res.send('PONG');
})

app.listen(3000, () => {
    console.log('Server is listening...');
})