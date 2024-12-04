

const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
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


const user  = mongoose.model("user",userschema);

module.exports = user;