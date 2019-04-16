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
// const someEmployee = new Employee({ 
//   name: "Juan",
//   lastname: "Delgado",
//   cinumber: "8420651",
//   birthdate: "02/15/1990",
//   address: "45 St. Carlos Medinacelli, Sopocachi, LP",
//   phone: "78451238",
//   role: "Designer",
//   profession: "Systems Engineering"
//  });
// someEmployee.save();

module.exports = {
  Employee
};
