const express = require('express');
const app = express();
const data = require('./data.json');
const PORT = 3000;

// Middleware
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request body

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Express App!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from API!' });
    console.log(data);
});


app.get('/api/userdata', (req, res) => {
    const body = req.body;
    console.log("body",body);
    
});
// 404 Handler
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
