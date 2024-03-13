const UserStocks = require("../models/User")

async function updateUserStock (id, data) {
   try {
      const update =  await UserStocks.findByIdAndUpdate(id, { $push: {portfolio: data} }, {new:true})  
      return update
   } catch (er) {
       throw new Error (er.message);
   }
}


async function deleteUserStock (id, data) {
   try {
      console.log("controller data is " + JSON.stringify(data))
      const update =  await UserStocks.findByIdAndUpdate(id, {$pull: {portfolio: { ticker: data}}}, {new: true});  
      console.log(update)    
      return update
   } catch (er) {
      console.log("What?" + er.message)
       throw new Error (er.message);
   }
}

module.exports = { updateUserStock, deleteUserStock };