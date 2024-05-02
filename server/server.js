const express = require("express");
const app = express();
require("dotenv").config();
require("./services/DB");
// const multer = require("multer")
const cors = require("cors")
app.use(cors());

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const path = require("path");
app.use("/images",express.static(path.join(__dirname,'./public/images/products')));
app.use(express.json())


const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);
const productRoutes = require("./routes/productRoutes");
app.use("/api/product", productRoutes);
const cartItemRoutes = require("./routes/cartitemRoutes");
app.use("/api/cartitem", cartItemRoutes);
const feedbackRoutes = require("./routes/feedbackRoutes");
app.use("/api/feedback", feedbackRoutes);
const ratingRoutes = require("./routes/ratingRoutes");
app.use("/api/rating", ratingRoutes);
const couponRoutes = require("./routes/couponRoutes");
app.use("/api/coupon", couponRoutes);
const paymentRoutes = require("./routes/paymentRoutes");
app.use("/api/payment", paymentRoutes);
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/order", orderRoutes);
const galleryRoutes = require("./routes/galleryRoutes");
app.use("/api/gallery", galleryRoutes);
const brandRoutes = require("./routes/brandRoutes");
app.use("/api/brand", brandRoutes);

app.listen(port, hostname, () => {
  console.log("Running port: ", port);
});
