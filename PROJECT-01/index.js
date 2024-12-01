const express = require('express');
const app = express();
const mongoose = require('mongoose');
const data = require('./data.json');
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/myfirstdata')



const user = mongoose.model("User",userSchema);
// Middleware
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request body


// schema




const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    lastname:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
            message: 'Please enter a valid email address'
        }
    },
    jobTitles: {
        type: Array,
        required: true,
    },
    gender:{
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    }
})
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
