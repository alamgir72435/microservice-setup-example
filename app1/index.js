const express = require('express');
const app = express();
const PORT = 5000;

// Define a route handler for the root path
app.get('/', (req, res) => {
    res.send('Hello, Express! 1');
});

console.log('==========================>>>> Another version of deployment');

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
