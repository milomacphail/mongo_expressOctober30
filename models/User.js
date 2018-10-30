//schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: {
        type: String, 
        require: true,
    },
    age: {
        type: Number,
    },
    password: {
        type: String, 
        require: true, 
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now, 
    }
})
