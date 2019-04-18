const { Employee } = require("../models/employee");

const resolvers = {
    Query: {
      getEmployees: async () => await Employee.find({}).exec(),
      getEmployee: async (_, id) => await Employee.find(id).exec()
    },
    Mutation: {
      addEmployee: async (_, args) => {
        try {
          let response = await Employee.create(args);
          return response;
        } catch (e) {
          return e.message;
        }
      },
      updateEmployee: async (_, args) => {
        try {
          let response = await Employee.findOneAndUpdate({cinumber: args.cinumber}, args, {new: true}, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
        
            console.log(doc);
        });
          // console.log(args.cinumber);
          return response;
        } catch (e) {
          return e.message;
        }
      },
      deleteEmployee: async (_, id) => {
        try {
          let response = await Employee.findOneAndDelete(id);
          // console.log(response);
          return response;
        } catch (e) {
          return e.message;
        }
      }
    }
  };

  module.exports = {
    resolvers
  };
  