//As a convention, in this file we should only configure stuff only in regards to our Express app,

const express = require('express');
const projectRouter = require('./routes/projectRoutes');
const teamRouter = require('./routes/teamRoutes');
const userRouter = require('./routes/userRoutes');
const ticketRouter = require('./routes/ticketRoutes');

const app = express(); // creating an Express.JS application

//        Mounting the subrouters to the app

app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/teams', teamRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tickets', ticketRouter);

//test
module.exports = app;
