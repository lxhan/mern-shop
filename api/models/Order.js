const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: Array,
      default: [],
    },
    product: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order };
