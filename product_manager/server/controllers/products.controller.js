const Product = require("../models/products.models");

//find all
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//find one
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.json(oneProduct ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//create product
module.exports.createProduct = (req, res) => {
    console.log(req.body)
    Product.create(req.body)
        .then(newProduct => {
            console.log('servers ok')
            res.json(newProduct)
        })
        .catch(err => {
            console.log("server issue")
            res.json(err)
        });
}

//edit product
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//delete product
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}