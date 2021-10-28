const mongoose = require('mongoose');

const propertiesSchema = new mongoose.Schema({

    property_for:{
        type: String,
        required: true
    },
    property_type:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    property_name:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    property_description:{
        type: String,
        required: true
    },
    property_size:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    price_is:{
        type: String,
        required: true
    },
    bedroom:{
        type: Number,
        required: true
    },
    garages:{
        type: Number,
        required: true
    },
    balconies:{
        type: Number,
        required: true
    },
    bathroom:{
        type: Number,
        required: true
    },
    owner_name:{
        type: String,
        required: true
    },
    owner_number:{
        type: Number,
        required: true
    },
    owner_gmail:{
        type: String,
        required: true
    },
    user_email:{
        type: String,
        required: true
    },
    image_one:{
        type: String,
        required: true
    },
    image_two:{
        type: String,
        required: true
    },
    image_three:{
        type: String,
        required: true
    },
    key:{
        type: String,
    },
},{timestamps:true})

module.exports = mongoose.model('Property',propertiesSchema)