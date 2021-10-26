const express = require('express');

const router = express.Router();


const {loanReq,getAllLoan,updateStatus,getApprovedLoan,getSpecificLoan,getSpecificUserAllLoan,deleteSpecificLoan} = require('../controllers/homeLoanController')

// post for loan req
router.post('/loanReq',loanReq);

//get all loan requests
router.get('/getAllLoan',getAllLoan);

//status update req
router.put('/updateStatus/:id',updateStatus);

//get approved loan requests
router.get('/getApprovedLoan',getApprovedLoan);

//get specific loan requests
router.get('/getSpecificLoan/:id',getSpecificLoan);

//get specific user all requests
router.get('/getSpecificUserAllLoan',getSpecificUserAllLoan);

//delete specific user loan
router.delete('/delete/:id', deleteSpecificLoan);

module.exports = router;