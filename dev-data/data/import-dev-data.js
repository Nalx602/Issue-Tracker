const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const Project = require('../../models/projectModel');
const Team = require('../../models/teamModel');
const User = require('../../models/userModel');

dotenv.config({
  path: `${__dirname}/../../config.env`,
});

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  console.log('Temp connection to IssueTracker DB successfull!');
});

const project = JSON.parse(
  fs.readFileSync(`${__dirname}/projectSamples.json`, 'utf-8')
);
const team = JSON.parse(
  fs.readFileSync(`${__dirname}/teamSamples.json`, 'utf-8')
);
const user = JSON.parse(
  fs.readFileSync(`${__dirname}/userSamples.json`, 'utf-8')
);

const importData = async () => {
  //Import data in DB
  try {
    await Project.create(project);
    await Team.create(team);
    await User.create(user);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  //Delete data from DB
  try {
    await Project.deleteMany();
    await Team.deleteMany();
    await User.deleteMany();
  } catch (err) {
    //console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
}
if (process.argv[2] === '--delete') {
  deleteData();
}
