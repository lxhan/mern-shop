const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: String,
    price: {
      type: Number,
      default: 0,
    },
    fee: {
      type: Number,
      default: 0,
    },
    image: String,
    sold: {
      type: Number,
      maxlength: 100,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

productSchema.index(
  {
    title: "text",
    description: "text",
  },
  {
    weights: {
      name: 5,
      description: 1,
    },
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
