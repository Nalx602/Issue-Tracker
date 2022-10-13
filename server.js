const dotenv = require('dotenv');

//dotenv is a module that loads environment variables from config.env file into process.env
dotenv.config({ path: './config.env' });
console.log('hello world');
