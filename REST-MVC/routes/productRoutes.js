const express = require('express')

const productController = require('../controller/productController')

const router = express.Router() // This method sets up the router

router.get('/products', productController.getAllProducts)
.get('/products/:id', productController.getproduct)
.post('/products', productController.createProduct)
.put('/products/:id', productController.replaceProduct)
.patch('/products/:id', productController.updateProduct)
.delete('/products/:id', productController.deleteProduct)

exports.router = router