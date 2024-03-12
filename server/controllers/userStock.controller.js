const UserStocks = require("../models/User")

async function updateUserStock (id, data) {
   try {

      console.log("I am in the controller")
       if (data.password) {
           const passwordHash = await bcrypt.hash(data.password, 10);
           const userData = {...data, password: passwordHash};
           return await User.findByIdAndUpdate(id, userData, {new:true}); 
       }
       return  await User.findByIdAndUpdate(id, data, {new:true})      
   } catch (er) {
       throw new Error (er.message);
   }
}

module.exports = { updateUserStock };