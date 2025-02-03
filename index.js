const express = require('express');
const middleware = require('./middleware'); // Adjust the path if needed

const app = express();

app.use(middleware); // Apply middleware globally

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
