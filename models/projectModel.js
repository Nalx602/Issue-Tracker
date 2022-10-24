const mongoose = require('mongoose');

//Schema for "Project" resource

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A project name is required!'],
    unique: true,
    maxlength: [40, 'A project name must have a maximum of 40 characters!'],
    minlength: [4, 'A project name must have a minimum of 4 characters!'],
  },
  description: {
    type: String,
    required: [true, 'A description of the project is required!'],
    maxlength: [100, 'Please restrict the description to 100 characthers!'],
  },
  status: {
    type: String,
    required: [true, 'A status of the project is required!'],
    enum: {
      values: ['ongoing', 'finished'],
      message: 'Status is either "ongoing" or "finished"',
    },
  },
  teams: Array, //using embeding of the teams,  will put the teamID in this array and then will overwrite this array of IDs with pre-save hook middleware to populate it
  members: Array, //same as with "teams", we will embed the userID in here
});

//Creating & exporting the model, made from the our Schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
