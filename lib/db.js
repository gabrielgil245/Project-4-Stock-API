const {Sequelize} = require('sequelize');
//const sequelize = new Sequelize('mysql://root@localhost/project-4-stock-api', {logging: false});
const sequelize = new Sequelize(
  "project-4-stock-api",
  "root",
  "password", //Enter local MySQL password
  {
    host:"localhost",
    dialect:"mysql"
  }
);
module.exports = {sequelize};

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });