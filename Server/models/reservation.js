// import mongoose from "mongoose";
// import validator from "validator";

// const reservationSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//     minLength: [3, "First name must be of at least 3 Characters."],
//     maxLength: [30, "First name cannot exceed 30 Characters."],
//   },
//   lastName: {
//     type: String,
//     required: true,
//     minLength: [3, "Last name must be of at least 3 Characters."],
//     maxLength: [30, "Last name cannot exceed 30 Characters."],
//   },
//   date: {
//     type: String,
//     required: true,
//   },
//   time: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     validate: [validator.isEmail, "Provide a valid email"],
//   },
//   phone: {
//     type: String,
//     required: true,
//     minLength: [10, "Phone number must contain 11 Digits."],
//     maxLength: [10, "Phone number must contain 11 Digits."],
//   },
// });

// export const Reservation = mongoose.model("Reservation", reservationSchema);


import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required."],
    minlength: [3, "First name must be at least 3 characters long."],
    maxlength: [30, "First name cannot exceed 30 characters."],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required."],
    minlength: [3, "Last name must be at least 3 characters long."],
    maxlength: [30, "Last name cannot exceed 30 characters."],
  },
  date: {
    type: Date, // Change to 'Date' for proper date handling
    required: [true, "Date is required."],
  },
  time: {
    type: String,
    required: [true, "Time is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    validate: [validator.isEmail, "Provide a valid email address."],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required."],
    minlength: [10, "Phone number must contain exactly 10 digits."],
    maxlength: [10, "Phone number must contain exactly 10 digits."],
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v); // Regex to ensure it's 10 numeric digits
      },
      message: "Phone number must be exactly 10 digits.",
    },
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);