const express = require("express");
const router = express.Router();
const { Product } = require("../models/Product");

const { auth } = require("../middleware/auth");

router.post("/addProduct", auth, (req, res) => {
  const product = new Product(req.body);

  product.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/getProducts", (req, res) => {
  Product.find({})
    .populate("user")
    .exec((err, products) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true, products });
    });
});

router.get("/getProduct", (req, res) => {
  const { type } = req.query;
  let productIds = req.query.id;

  if (type === "array") {
    let ids = req.query.id.split(",");
    productIds = [];
    productIds = ids.map((item) => {
      return item;
    });
  }

  Product.find({ _id: { $in: productIds } })
    .populate("user")
    .exec((err, product) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(product);
    });
});

module.exports = router;
