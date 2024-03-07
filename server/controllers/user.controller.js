const User = require("../models/User.js");
const bcrypt = require("bcrypt");


async function getAllUsers () {
    try {
        const userData = await User.find({});
        const users = userData.map(usr => {
            const {password, ...safeUser} = usr;
            return safeUser;
        });
        return users;
    }
    catch (er) {
        throw new Error (er.message);
    }
}

async function getUser (id) {
    try {
        return await User.findById(id);
    }
    catch (er) {
        throw new Error (er.message);
    }
}

async function deleteUser (id) {
    try {
        return await User.findByIdAndDelete(id);
    }
    catch (er) {
        throw new Error (er.message);
    }
}

async function createUser (data) {
    try {
        const passwordHash = await bcrypt.hash(data.password, 10);
        const userData = {...data, password: passwordHash};
        return await User.create(userData);
    }
    catch (er) {
        throw new Error (er.message);
    }
}

async function updateUser (id, data) {
    try {
        if (data.password) {
            const passwordHash = await bcrypt.hash(data.password, 10);
            const userData = {...data, password: passwordHash};
            return await User.create(id, userData, {new:true}); 
        }
        return  await User.findByIdAndUpdate(id, data, {new:true})      
    } catch (er) {
        throw new Error (er.message);
    }
}

async function loginHandler (username, pswd) {
    try {
        let isUser = await User.findOne({username: username});
        if (isUser) {
        let isVerified = await bcrypt.compare(pswd, isUser.password);

        if (isVerified) {
            const {password, ...verifiedUser} = isUser;
            return verifiedUser;
        }
        else {
            throw new Error ("Invalid password!");
        }
    }
    else {
        throw new Error ("Invalid username!");
    }
    } catch (er) {
        throw new Error (er.message);
    }
}


module.exports = {getAllUsers, createUser, deleteUser, getUser, 
    getAllUsers, updateUser, loginHandler};