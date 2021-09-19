const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  routeImg: {
    type: String,
    required: true,
  },
  idProduct: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", ProductSchema);
