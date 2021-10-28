const express = require('express');
const router = express.Router();

const {addReview, getReviews, updateReviews,deleteReviews} = require('../controllers/reviewController');

router.post('/addReview',addReview);
router.get('/getReviews',getReviews);
router.patch('/updateReviews/:id',updateReviews);
router.delete('/deleteReviews/:id',deleteReviews);


module.exports = router;