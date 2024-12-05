const mongoose = require('mongoose')


const urlschema = new mongoose.Schema({
    shortid:{
        type:String,
        required:true,
        unique:true
    },
    redirecturl:{
        type:String,
        required:true
    },
    visitHistory:[{timestamp:{type:Number}}],
    timestamp:true,

})

const URL = mongoose.model('url',urlschema);

module.exports = URL;