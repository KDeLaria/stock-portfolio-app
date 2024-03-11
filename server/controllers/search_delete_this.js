const Stocks = require('../models/Stocks')


// Do search of all stocks that are found in the body of the search input

async function getAllStocks () {
   try{
      return await Stocks.find({ company_name: { $regex: regexPattern } })
      // Keep ticket symbol and company name

   }
   catch (err) {
      throw new Error (err.message)
   }

}