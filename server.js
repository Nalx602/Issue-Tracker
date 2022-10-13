const dotenv = require('dotenv');
const app = require('./app');

//dotenv is a module that loads environment variables from config.env file into process.env;
dotenv.config({ path: './config.env' });

//Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`);
});
