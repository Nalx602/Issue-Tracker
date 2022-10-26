const mongoose = require('mongoose');
const validator = require('validator'); //3rd party module for checking if e-mail is valid

const userSchema = new mongoose.Schema({
  name: {
    required: [true, 'A user name is required!'],
    type: String,
  },
  role: {
    required: true,
    type: String,
    enum: {
      values: [
        'Admin',
        'Front-end engineer',
        'Back-end engineer',
        'Tester',
        'Project manager',
        'Sales rep',
      ],
      message:
        'A user must have one of the following roles: admin, front-end engineer, back-end engineer, tester, project manager, sales.',
    },
  },
  team: Array, //the team will be embedded in here
  email: {
    type: String,
    required: [true, ' A user e-mail is required!'],
    lowercase: true, //will transform it in lowercase,
    validate: [validator.isEmail, 'Please provide a valid e-mail!'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
