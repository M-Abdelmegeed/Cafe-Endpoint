const Product = require("./models/product");

const addProduct = async (req, res) => {
  const body = req.body;
  const newProduct = new Product({
    title: body.title,
    price: body.price,
    timestamp: new Date(),
    quantity: body.quantity,
  });
  await newProduct.save();
  res.send("New product added successfully!");
};

module.exports = addProduct;
