const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: {
    required: [true, 'A ticket requires a title!'],
    unique: true,
    type: String,
  },
  category: {
    type: String,
    required: [true, 'A ticket category description is required!'],
    maxlength: [40, 'A ticket category must have a maximum of 40 characters!'],
    minlength: [4, 'A ticket category must have a minimum of 4 characters!'],
  },
  priority: {
    type: String,
    required: [true, 'The priortiy of the ticket is required!'],
    enum: {
      values: ['Low', 'Medium', 'High', 'Critical'],
      message:
        'The priority of the ticket can only be "Low", "Medium", "High", "Critical"',
    },
  },
  status: {
    type: String,
    required: [true, 'The status of the ticket is required!'],
    enum: {
      values: ['Waiting', 'In progress', 'Fixed', 'Cancelled'],
      message:
        'The priority of the ticket can only be "Waiting", "In progress", "Fixed", "Cancelled"',
    },
    default: 'Waiting',
  },
  description: {
    type: String,
    required: [true, 'A ticket description is required!'],
  },
  author: Array, // the logged in user that creates this
  handler: Array, //who currently is assigned to it

  //SLA for ticket
  raisedAt: Date, //date=time when ticket is raised
  daysLeft: String, // x days, y hours remaining
  outstanding: String, // x days, y hours since is breached target
});

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
