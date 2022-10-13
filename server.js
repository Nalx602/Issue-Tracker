const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

//dotenv is a module that loads environment variables from config.env file into process.env;
dotenv.config({ path: './config.env' });

// Creating the DB connection string & connecting to the IssueTracker DB, made with MongoDB
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then((con) => {
  //mongoose.connect is a promise and will need to be consumed;
  //con is the object returned, use it for debugging;
  console.log('IssueTracker DB connected successfully');
});

//Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`);
});
