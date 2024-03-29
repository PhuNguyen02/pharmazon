const express = require("express");
//const checkLogin = require("../middleware/checkUser.middleware");
const { getProductsBycategory, createProduct, updateProducts,deleteProduct, getProductById,getProductApi,getAllProduct} = require("../controllers/product.controller");
const router = express.Router();


router.get('/allProducts',getAllProduct)
router.get('/productapi', getProductApi)
router.get('/products/category', getProductsBycategory);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProducts);
router.delete('/:id', deleteProduct)

module.exports = router
