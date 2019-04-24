const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: String,
    lastname: String,
    cinumber: String,
    birthdate: String,
    address: String,
    phone: String,
    role: String,
    profession: String
});

const Employee = mongoose.model("employee", employeeSchema);

module.exports = {
  Employee
};
