const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'A comment cannot be empty!'],
  },
  date: Date, //this should be when the comment is created
  author: Array, //the userID of the logged in user who creates the comment
});
