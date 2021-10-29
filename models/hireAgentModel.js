const mongoose = require('mongoose');

const hireAgentSchema = new mongoose.Schema({
    agent_key:{
        type:String,
        required:true,
    },
    agent_name:{
        type:String,
        required:true,
    },

    agent_title:{
        type:String,
        required:true,
    },
    fees:{
        type:String,
        required:true,
    },
    agent_image:{
        type:String,
        required:true,
    },

    user_email:{
        type:String,
        required:true,
    },
    agent_email:{
        type:String,
        required:true,
    }
},{timestamps:true})

module.exports = mongoose.model('HireAgent',hireAgentSchema )