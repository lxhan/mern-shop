const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const users = require("./routes/users");
const product = require("./routes/product");
const config = require("./config");
const mongoose = require("mongoose");

const port = process.env.API_PORT || 5000;

mongoose
  .connect(config.MONGO_URI, config.MONGO_OPTIONS)
  .then(() => {
    app.use(cors());

    app.use(express.json());

    app.use(cookieParser());

    app.use("/api/users", users);
    app.use("/api/product", product);

    app.listen(port, () => {
      console.log(`Server Running at ${port}`);
    });
  })
  .catch((err) => console.log(err));
