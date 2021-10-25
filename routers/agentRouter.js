const express = require('express');
const router = express.Router();

const {agentAdd,getAgent,singleAgent} = require('../controllers/agentController');

router.post('/addAgent', agentAdd);
router.get('/getAgent', getAgent);
router.get('/singleAgent/:id', singleAgent);

module.exports = router;