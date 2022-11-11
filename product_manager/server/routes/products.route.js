const ProductController = require('../controllers/products.controller')

module.exports = app => {
    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.post('/api/product', ProductController.createProduct);
    app.put('/api/product/:id', ProductController.updateExistingProduct);
    app.delete('/api/product/:id', ProductController.deleteAnExistingProduct)
}