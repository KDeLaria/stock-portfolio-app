const Portfolio = require("../models/Portfolio");

async function getAllPortfolio () {
    try {
        return await Portfolio.find({});
    }
    catch (er) {
        throw new Error (er.message);
    }
}

async function getStock (id) {
    try {
        return await Portfolio.findById(id);
    }
    catch (er) {
        throw new Error (er.message);
    }
}

async function deleteStock (id) {
    try {
        return await User.findByIdAndDelete(id);
    }
    catch (er) {
        throw new Error (er.message);
    }
}

async function updateStock (id, ) {
    try {
        return await User.findByIdAndUpdate(id);
    }
    catch (er) {
        throw new Error (er.message);
    }
}

async function createStock (data) {
    try {
        return await Portfolio.create(data);
    }
    catch (er) {
        throw new Error (er.message);
    }
}