// Need connection
const db = require('../config/connection');

const { Stocks } = require('../models');

const stockSeedData = require('./sp500.json');

db.once('open', async () => {

   const stocks = await Stocks.insertMany(stockSeedData);

   console.log('all done!');
   process.exit(0);


});


seedDatabase();
