const mongoose = require('mongoose');



const homeLoanSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    houseNo:{
        type: String,
        required: true
    },
    roadNo:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    profession:{
        type: String,
        required: true
    },
    monthlyIncome:{
        type: Number,
    },
    reqLoan:{
        type: Number,
        required: true
    },
    tenureLoan:{
        type: Number,
        required: true
    },
    existingLoan:{
        type: Number,
        required: true
    },
    nidNumber:{
        type: Number,
        required: true
    },
    nidPhoto:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum:['pending','approved','delete'],
        default: 'pending'
    }
},{timestamps:true})

module.exports = mongoose.model('HomeLoan', homeLoanSchema)