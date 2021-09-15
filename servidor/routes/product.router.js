const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.Controller');

//api/products
router.post('/', productController.crearProduct);
router.get('/', productController.obtenerProducts);
router.put('/:id', productController.actualizarProduct);
router.get('/:id', productController.obtenerProduct);
router.delete('/:id', productController.eliminarProduct);

module.exports = router;