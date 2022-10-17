const mongoose = require('mongoose');

//Schema for "Project" resource

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: [40, 'A project name must have a maximum of 40 characters!'],
    minlength: [4, 'A project name must have a minimum of 4 characters!'],
  },
  description: {
    type: String,
    required: true,
    maxlength: [100, 'Please restrict the description to 100 characthers!'],
  },
});

//Creating & exporting the model, made from the our Schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
