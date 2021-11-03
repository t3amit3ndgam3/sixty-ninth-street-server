const mongoose = require("mongoose");

const HomeLoan = require("../models/homeLoan");

exports.loanReq = async (req, res) => {
  console.log(req.body);
  const {
    name,
    dob,
    area,
    houseno,
    roadno,
    city,
    mobileno,
    email,
    profession,
    monthly_income,
    loan_amount,
    loan_tenure,
    loan_exist,
    national_id,
    national_id_pic,
    loan_status,
    user_email
  } = req.body;
  try {
    const newLoanReq = new HomeLoan({
      name,
      dob,
      area,
      houseno,
      roadno,
      city,
      mobileno,
      email,
      profession,
      monthly_income,
      loan_amount,
      loan_tenure,
      loan_exist,
      national_id,
      national_id_pic,
      loan_status,
      user_email,
    });
    await newLoanReq.save();
    res.status(200).json({
      data: newLoanReq,
      message: "Your Home Loan Request added Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//get all loan requests

exports.getAllLoan = async (req, res) => {
  try {
    const allLoans = await HomeLoan.find({}).sort("-createdAt");
    res.status(200).json({
      data: allLoans,
      message: "Your Home Loan Request sent successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong..",
    });
  }
};

// status update

exports.updateStatus = async (req, res) => {
  try {
    const result = await HomeLoan.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          loan_status: "approved",
        },
      },
      { new: true, useFindAndModify: true }
    );
    res.status(200).json({
      message: "Status updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server error",
    });
  }
};

//get loan by verified

exports.getApprovedLoan = async (req, res) => {
  try {
    const data = await HomeLoan.find({ loan_status: "approved" }).sort("-createdAt");
    res.status(200).json({
      result: data,
      message: "Your Requesting was Successfully Finished",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was an error finding all request",
    });
  }
};

//get loan request with specified id

exports.getSpecificLoan = async (req, res) => {
  try {
    const data = await HomeLoan.find({ _id: req.params.id }).sort("-createdAt");
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
  try {
    const data = await HomeLoan.find({ email: req.params.email });
    res.status(200).json({
      result: data,
      message: "Specific user all loan find successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server error",
    });
  }
};

//delete loan

exports.deleteSpecificLoan = async (req, res) => {
  try {
    const deleteLoan = await HomeLoan.deleteOne({ _id: req.params.id }).sort(
      "-createdAt"
    );
    res.status(200).json({
      message: "loan deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server error",
    });
  }
};