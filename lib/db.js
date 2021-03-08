const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost/project-4-stock-api', {logging: false});
module.exports = {sequelize};

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });