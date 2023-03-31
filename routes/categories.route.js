let express = require("express");
let categoryRoutes = express.Router();
let categoryController = require("../controller//category.controller");


categoryRoutes.get("/", categoryController.getAllCategories);

categoryRoutes.get("/:categoryId", categoryController.getCategoryById);

module.exports = categoryRoutes;