const UserReviews = require('../models/userReviewModel');

exports.addReview = async (req, res) => {
    const {user_name, user_reviews} = req.body;
    try {
        const reviewAdd = new UserReviews({
            user_name,
            user_reviews
        })
        await reviewAdd.save()
            res.status(200).json({
                data: reviewAdd,
                message: 'Review added successfully'
            })

    }
    catch (err) {
        res.status(500).json({ message: err.message });
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

exports.updateReviews = async (req, res) => {
    const id = {_id:req.params.id};
    const update = {
        user_name:req.body.user_name,
        user_reviews:req.body.user_reviews
    }
    try {
        const reviewsList = await UserReviews.findOneAndUpdate(id, update,{new:true})
        res.status(200).json({
            data: reviewsList,
            message: 'Reviews update successfully'
        })
    }
    catch (err) {
        res.status(500).json({ message: "something went wrong..." });
    }
}

exports.deleteReviews = async(req, res) => {
	try {
		const reviewsDelete = await UserReviews.deleteOne({ _id: req.params.id });
		res.status(200).json({
			data: reviewsDelete,
			message: "Reviews Deleted successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: "Properties list not found",
		});
	}
};