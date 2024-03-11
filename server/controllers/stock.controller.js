const Stocks = require("../models/Stocks");

async function getAllStocks() {
   try {
      return await Stocks.find();
   }
   catch (er) {
      throw new Error(er.message);
   }
}

// async function getStock(id) {
//    try {
//       console.log("Looking for id " + id);
//       return await Stocks.findById(id);
//    }
//    catch (er) {
//       throw new Error(er.message);
//    }
// }

async function getSearchStock(regex) {
   console.log("I am in the stock controller")
   try {
      // MongoDB's $regex operator matches substrings within the field value by default. Do not use %regex%.
      const regexPattern = new RegExp(`${regex}`, 'i');
      console.log("Looking for " + regexPattern)
      return await Stocks.find({ company_name: { $regex: regexPattern } });
   }
   catch (er) {
      throw new Error(er.message);
   }
}

async function deleteStock(id) {
   try {
      return await Stocks.findByIdAndDelete(id);
   }
   catch (er) {
      throw new Error(er.message);
   }
}

async function updateStock(id) {
   try {
      return await Stocks.findByIdAndUpdate(id);
   }
   catch (er) {
      throw new Error(er.message);
   }
}

async function createStock(data) {
   try {
      return await Stocks.create(data);
   }
   catch (er) {
      throw new Error(er.message);
   }
}

module.exports = { createStock, deleteStock, updateStock, getAllStocks, getSearchStock };