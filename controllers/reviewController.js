const UserReviews = require('../models/userReviewModel');

exports.addReview = async (req, res) => {
    const {user_name, review} = req.body;
    try {
        const reviewAdd = new UserReviews({
            user_name,
            review
        })
        await reviewAdd.save()
            res.status(200).json({
                data: reviewAdd,
                message: 'Review added successfully'
            })

    }
    catch (err) {
        res.status(500).json({ message: "Something went wrong..." });
    }
}
exports.getReviews = async (req, res) => {
    try {
        const reviewsList = await UserReviews.find({})
        res.status(200).json({
            data: reviewsList,
            message: 'Reviews done successfully'
        })
    }
    catch (err) {
        res.status(500).json({ message: "something went wrong..." });
    }
}
