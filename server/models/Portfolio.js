const { Schema, model } = require('mongoose');

const portfolioSchema = new Schema({
   ticker: {
      type: String
   },
   shares_owned: {
      type: String
   },
   owner_id: {
      type: Number
   }
}, {
   timestamps: false
})

const Portfolio = model('Portfolio', portfolioSchema)

module.exports= Portfolio;
