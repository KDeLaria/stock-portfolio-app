const Stocks = require('../models/Stocks')


// Do search of all stocks that are found in the body of the search input

async function getAllStocks () {
   try{
      const stocksFound = await Stocks.find(search_term)
      // Keep ticket symbol and company name

   }
   catch (err) {
      throw new Error (err.message)
   }

}