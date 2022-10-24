const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A team name is required!'],
    unique: true,
    maxlength: [20, 'A team name must have a maximum of 20 characters!'],
    minlength: [4, 'A team name must have a minimum of 4 characters!'],
  },
  lead: Array, //one of the users will be lead
});

//Creating the Model
const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
