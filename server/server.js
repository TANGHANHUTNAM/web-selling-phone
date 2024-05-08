const express = require("express");
const app = express();
require("dotenv").config();
require("./services/DB");
const multer = require("multer")
const cors = require("cors")
app.use(cors());

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const path = require("path");
app.use("/images",express.static(path.join(__dirname,'./public/images/products')));
app.use(express.json())

const storage = multer.diskStorage({
  destination: './public/images/product',
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
}).single('image');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.send('An error occurred while uploading the image');
    } else {
      res.send('Image uploaded successfully');
    }
  });
});

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
