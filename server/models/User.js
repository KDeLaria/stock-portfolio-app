const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true // Assuming username should be unique
    },
    password: {
        type: String,
        required: true
    },
    portfolio: [{
        ticker: {
            type: String,
            required: true
        },
        shares_owned: {
            type: Number,
            required: true
        }
    }]
});

const User = model('User', userSchema);

module.exports = User;