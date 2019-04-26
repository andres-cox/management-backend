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
          let response = await Employee.findOneAndUpdate({_id: args.id}, args, {new: true}, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
        });
          return response;
        } catch (e) {
          return e.message;
        }
      },
      deleteEmployee: async (_, args) => {
        try {
          let response = await Employee.findByIdAndRemove(args.id);
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
  