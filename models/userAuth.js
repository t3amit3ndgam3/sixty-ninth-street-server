const mongoose = require('mongoose');


//user auth schema 
const userAuthSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
    
}, {timestamps:true})

module.exports = mongoose.model('User', userAuthSchema);