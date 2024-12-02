const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Express App!');
});

router.get('/api', (req, res) => {
    res.json({ message: 'Hello from API!' });
    console.log(data);
});


router.get('/api/userdata', (req, res) => {
    const body = req.body;
    console.log("body",body);
    
});
// 404 Handler
router.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Error Handling Middleware
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});