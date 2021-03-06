const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost/project-4-stock-api', {logging: false});
module.exports = {sequelize};