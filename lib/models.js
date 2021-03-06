const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('../lib/db');
// ORM - Object Relational Mapping

class Portfolio extends Model{

}

Portfolio.init({
    symbol: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
    sequelize, // Pass the connection instance
    modelName: 'Portfolio' // Choose the model name
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
    Portfolio, Cash
};