const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id_category: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  view: {
    type: Number,
    default: 0,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  updateDate: {
    type: Date,
    default: Date.now(),
  },
  id_user: {
    type: String,
    default: "undefined",
  },
});

module.exports = mongoose.model("Product", ProductSchema);
