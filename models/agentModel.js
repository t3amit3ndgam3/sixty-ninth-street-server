const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
    agent_name:{
        type: String,
        required: true
    },
    agent_title:{
        type: String,
        required: true
    },
    agent_number:{
        type: Number,
        required: true
    },
    agent_email:{
        type: String,
        required: true
    },
    agent_facebook:{
        type: String,
        required: true
    },
    agent_linkend:{
        type: String,
        required: true
    },
    agent_twitter:{
        type: String,
        required: true
    },
    agent_instagram:{
        type: String,
        required: true
    },

    agent_skype:{
        type: String,
        required: true
    },
    agent_description:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        required: true
    },
    fees:{
        type: Number,
        required: true
    },
    agent_image:{
        type: String,
        required: true
    },
    key:{
        type: String,
    }
},{timestamps:true})

module.exports = mongoose.model('Agents',agentSchema);