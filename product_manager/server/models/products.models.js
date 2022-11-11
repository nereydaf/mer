const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You need to have a title"],
        minlength: [3, "Title has to be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "You need to input a price"],
        min: [1, "Your price has to be at least a dollar"]
    },
    description: {
        type: String,
        required: [true, "Your item needs a description"],
        minlength: [3, "Your description needs to be a little longer"]
    }
},  {timestamps: true})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
