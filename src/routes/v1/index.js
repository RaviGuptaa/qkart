const express = require("express");
const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const productRoute = require("./product.route");
const cartRoute = require("./cart.route");

const router = express.Router();


// TODO: CRIO_TASK_MODULE_AUTH - Reroute all API requests beginning with the `/v1/auth` route to Express router in auth.route.js 
router.use("/users",userRoute);
router.use("/auth",authRoute);
router.use("/products", productRoute);
router.use("/cart", cartRoute);

module.exports = router;
