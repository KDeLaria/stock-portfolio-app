// Need connection
const conn = require('../config/connection');

const { Stocks } = require('../models');

const stockSeedData = require('./sp500.json');

conn.once('open', async () => {

   // Deletes old stocks if present
   let stocksCheck = await conn.db.listCollections({ name: 'stocks' }).toArray();
   if (stocksCheck.length) {
      await conn.dropCollection('stocks');
   }

   console.log("I am getting ready to load the stock data.")

   const stocks = await Stocks.insertMany(stockSeedData);

   console.log('all done!');
   process.exit(0);


});

