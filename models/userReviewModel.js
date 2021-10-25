const mongoose = require('mongoose');

const UserReviewSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('UserReviews',UserReviewSchema)