const express = require('express');
const router = express.Router();

const {propertiesAdd} = require('../controllers/propertiesController')

router.post('/addProperty', propertiesAdd)


module.exports = router;