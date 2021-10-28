const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({
    property_for:{
        type: 'string',
        required: true
    },
    property_type:{
        type:"string",
        required: true
    },
    city:{
        type:"string",
        required: true
    },
    size:{
        type:"string",
        required: true
    },
    user_email:{
        type:"string",
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model('Requirement', requirementSchema);