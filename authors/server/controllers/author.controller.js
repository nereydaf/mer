const Author = require("../models/author.model");

//find all
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//find one
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor => res.json(oneAuthor ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//create author
module.exports.createAuthor = (req, res) => {
    console.log(req.body)
    Author.create(req.body)
        .then(newAuthor => {
            console.log('servers ok')
            res.json(newAuthor)
        })
        .catch(err => {
            console.log("server issue")
            res.status(400).json(err)
        });
}

//edit author
module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//delete Author
module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}