const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema(
  {
    name: String,
    phone: String,
    email: String,
    address: String,
    postalZip: String,
    region: String,
    country: String,
    list: String,
    text: String,
    numberrange: String,
    currency: String,
    alphanumeric: String,
  },
  { timestamps: true }
);

// Model
const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
