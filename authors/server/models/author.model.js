const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "You need the name of an author to add to the website"],
        minlength: [3, "The name needs to be at least 3 characters long"]
    }
}, {timestamps: true})

const Author = mongoose.model('Author', authorSchema);
module.exports= Author;