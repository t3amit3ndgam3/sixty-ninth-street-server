const mongoose = require("mongoose");

const homeLoanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    houseno: {
      type: String,
      required: true,
    },
    roadno: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    mobileno: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    monthly_income: {
      type: Number,
    },
    loan_amount: {
      type: Number,
      required: true,
    },
    loan_tenure: {
      type: Number,
      required: true,
    },
    loan_exist: {
      type: String,
      required: true,
    },
    national_id: {
      type: Number,
      required: true,
    },
    national_id_pic: {
      type: String,
      required: true,
    },
    national_id_pic: {
      type: String,
      required: true,
    },
    loan_status: {
      type: String,
      required: true,
    },
    user_email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HomeLoan", homeLoanSchema);