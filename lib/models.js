const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('../lib/db');
// ORM - Object Relational Mapping

class Stocks extends Model{

}

Stocks.init({
    name: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER

    },
    value: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
    sequelize, // Pass the connection instance
    modelName: 'Stocks' // Choose the model name
});

class Cash extends Model {

}

Cash.init({
    value: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
    sequelize, // Pass the connection instance
    modelName: 'Cash' // Choose the model name
});

sequelize.sync({alter: true});

// NOTE: Code below will drop and recreate the DB again. 
// Please use only in localhost. I have added a condition that checks
// for localhost before it runs
// if(process.env.BASE_URL.match('localhost')){
//     sequalize.sync({force: true});
// }

module.exports = {
    Stocks, Cash
};