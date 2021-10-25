const express = require('express');
const router = express.Router();

const {propertiesAdd,getAllProperties, searchProperties, specificProperties} = require('../controllers/propertiesController')

router.post('/addProperty', propertiesAdd)
router.get('/allProperty', getAllProperties)
router.get('/search/:name',searchProperties)
router.get('/findProperties/:id',specificProperties)


module.exports = router;