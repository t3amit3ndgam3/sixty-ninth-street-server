const UserReviews = require('../models/userReviewModel');

exports.addReview = async(req, res)=>{
    try{    
        const reviewAdd = new UserReviews({
            user_name,
            review
        })
        await addReview.save()
        .res.status(200).json({
            data:reviewAdd,
            message: 'Review added successfully'
        })

    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}
exports.getReviews = async(req, res)=>{
    try{ 
        const reviewsList  = UserReviews.find({})
        res.status(200).json({
            data:reviewsList,
            message: 'Reviews done successfully'
        })
    }
    catch(err){
        res.status(500).json({message: "Reviews not found"});
    }
}
