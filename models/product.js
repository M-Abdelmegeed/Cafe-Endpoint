const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
