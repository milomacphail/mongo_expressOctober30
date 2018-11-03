//mongoose connection
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
    firstName: 
    {
        type: String,
        require: true
    },
    lastName:    
    {
        type: String,
        require: true
    },
    aboutMe:
    {
        type: String
    },
    age:
    {
        type: Number,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    }
    
    
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);