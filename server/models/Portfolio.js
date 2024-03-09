const { Schema, model } = require('mongoose');

const portfolioSchema = new Schema({
   ticker: {
      type: String
   },
   shares_owned: {
      type: String
   },
   owner_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
   }
}, {
   timestamps: false
})

const Portfolio = model('Portfolio', portfolioSchema)

module.exports= Portfolio;
