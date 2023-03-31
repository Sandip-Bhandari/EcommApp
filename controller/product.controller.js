let Products = require("../model/product");
let dbConnection = require("../config/db.config");

let getAllProducts = (req, res, next) => {
  res.write("this is products page");
  res.end();
}

let gerProductById = (req, res, next) => {
  res.write("this is product " + req.params.productId);
  res.end();
}

let createTable = async () => {
  await dbConnection.sync();
  console.log("Product table created successfully");
}
// createTable();
module.exports = {getAllProducts, gerProductById}