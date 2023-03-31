let express = require('express');
let productRoutes = express.Router();
let productController = require("../controller/product.controller")

productRoutes.get("/", productController.getAllProducts);

productRoutes.get("/:productId", productController.gerProductById );

module.exports = productRoutes;