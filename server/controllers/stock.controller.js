const Stocks = require("../models/Stocks");

async function getAllStocks () {
    try {
        return await Stocks.find();
    }
    catch (er) {
        throw new Error (er.message);
    }
}

async function getStock (id) {
    try {
        return await Stocks.findById(id);
    }
    catch (er) {
        throw new Error (er.message);
    }
}

async function deleteStock (id) {
    try {
        return await Stocks.findByIdAndDelete(id);
    }
    catch (er) {
        throw new Error (er.message);
    }
}

async function updateStock (id) {
    try {
        return await Stocks.findByIdAndUpdate(id);
    }
    catch (er) {
        throw new Error (er.message);
    }
}

async function createStock (data) {
    try {
        return await Stocks.create(data);
    }
    catch (er) {
        throw new Error (er.message);
    }
}

module.exports = {createStock, deleteStock, updateStock, getStock, getAllStocks};