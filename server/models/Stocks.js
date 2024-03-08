const { Schema, model } = require('mongoose');

const stocksSchema = new Schema({
   ticker: {
      type: String
   },
   company_name: {
      type: String
   }
}, {
   timestamps: false
})

const Stocks = model('Stocks', stocksSchema)

module.exports= Stocks;
