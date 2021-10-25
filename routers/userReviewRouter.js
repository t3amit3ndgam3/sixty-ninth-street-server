const express = require('express');
const router = express.Router();

const {addReview, getReviews} = require('../controllers/reviewController');

router.post('/addReview',addReview);
router.get('/getReviews',getReviews);
module.exports = router;