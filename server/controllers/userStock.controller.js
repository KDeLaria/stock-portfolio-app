const UserStocks = require("../models/User")

async function updateUserStock (id, data) {
   try {
      const update =  await UserStocks.findByIdAndUpdate(id, { $push: {portfolio: data} }, {new:true})  
      console.log(update)    
      return update
   } catch (er) {
       throw new Error (er.message);
   }
}

module.exports = { updateUserStock };