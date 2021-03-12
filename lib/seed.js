const {Cash} = require('../lib/models');

const seedTheDatabase = async () => {
    let currentCash = await Cash.findAll({});

    if(currentCash.length == 0){
        await Cash.create({value: 100000});
    }
};

seedTheDatabase();