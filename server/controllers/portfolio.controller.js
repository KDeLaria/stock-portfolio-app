const Portfolio = require("../models/Portfolio");

async function getAllPortfolio (userId) {
    try {
        return await Portfolio.find({owner_id:userId});
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
        return await Portfolio.findByIdAndDelete(id);
    }
    catch (er) {
        throw new Error (er.message);
    }
}

async function updateStock (id) {
    try {
        return await Portfolio.findByIdAndUpdate(id);
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

module.exports = {createStock, deleteStock, updateStock, getStock, getAllPortfolio};