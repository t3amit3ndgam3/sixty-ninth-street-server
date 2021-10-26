const mongoose = require('mongoose');

const HomeLoan = require('../models/homeLoan');

exports.loanReq = async (req, res) => {
    const {
        fullName,
        dob,
        area,
        houseNo,
        roadNo,
        city,
        number,
        email,
        profession,
        monthlyIncome,
        reqLoan,
        tenureLoan,
        existingLoan,
        nidNumber,
        nidPhoto
    } = req.body;
    try {
        const newLoanReq = new HomeLoan({
            fullName,
            dob,
            area,
            houseNo,
            roadNo,
            city,
            number,
            email,
            profession,
            monthlyIncome,
            reqLoan,
            tenureLoan,
            existingLoan,
            nidNumber,
            nidPhoto,
            status
        });
        await newLoanReq.save();
        res.status(200).json({
            data:newLoanReq,
            message:"Your Home Loan Request sent successfully"
        })
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong.."
        })
    }
}

//get all loan requests

exports.getAllLoan = async (req, res) => {
    try{
        const allLoans = await HomeLoan.find({}).sort('-createdAt')
        res.status(200).json({
            data:allLoans,
            message:"Your Home Loan Request sent successfully"
        })
    }catch (err) {
        res.status(500).json({
            message: "Something went wrong.."
        })
    }
}

// status update

exports.updateStatus = async (req, res) => {
    try {
        const result = await HomeLoan.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                status: 'approved'
            }
        }, { new: true, useFindAndModify: false })
        res.status(200).json({
            message: 'Status updated successfully'
        })
    } catch (err) {
        res.status(500).json({
            error: 'There was a server error'
        })
    }
}

//get loan by verified

exports.getApprovedLoan = async (req, res) => {
    try {
        const data = await HomeLoan.find({status:'approved'}).sort('-createdAt')
        res.status(200).json({
            result: data,
            message: "Your Requesting was Successfully Finished"
        })

    } catch (err) {
        res.status(500).json({
            error: 'There was an error finding all request'
        })
    }
}



//get loan request with specified id

exports.getSpecificLoan = async (req, res) => {
    try {
  
      const data = await HomeLoan.find({ _id: req.params.id}).sort('-createdAt')
      res.status(200).json({
        result: data,
        message: "Specific loan find successfully",
      });
    } catch (err) {
      res.status(500).json({
        error: "There was a server error",
      });
    }
};

// specific user all loans

exports.getSpecificUserAllLoan = async (req, res) => {
    try{
        
        const data = await HomeLoan.find({email: req.body.email})
        res.status(200).json({
            result: data,
            message: "Specific user all loan find successfully",
          });
    }
    catch (err) {
      res.status(500).json({
        error: "There was a server error",
      });
    }
}



//delete loan

exports.deleteSpecificLoan = async (req, res) => {
    try {
        const deleteLoan = await HomeLoan.deleteOne({ _id: req.params.id }).sort('-createdAt');
        res.status(200).json({
            message: 'loan deleted successfully'
        })
    }
    catch (err) {
        res.status(500).json({
            error: 'There was a server error'
        })
    }
}