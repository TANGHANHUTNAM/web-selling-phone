const express = require("express");
const app = express();
require("dotenv").config();
require("./services/DB");
// const multer = require("multer")
// const cors = require("cors")

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

const configViewEngine = require("./config/viewEngine");
configViewEngine(app);
app.use(express.json())


const webRoutes = require("./routes/webRoutes");
app.use("/", webRoutes);
const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);
// const userRoutes = require("./routes/user")
// app.use("/users", userRoutes)
// const studentRoutes = require("./routes/student")
// app.use("/students", studentRoutes)
// const authRoutes = require("./routes/auth")
// app.use("/api/auth", authRoutes)

const products = [{
    id: 1,
    name: "Iphone 11",
    price_new: "11000000",
    price_old: "13000000",
    des: "Iphone 11",
    imgURL: "./public/images/products/ip1.jpg",
    rating: "5.0"
},
{
    id: 2,
    name: "Iphone 12",
    price_new: "12000000",
    price_old: "14000000",
    des: "Iphone 12",
    imgURL: "./public/images/products/ip2.jpg",
    rating: "5.0"
},{
    id: 3,
    name: "Iphone 13",
    price_new: "13000000",
    price_old: "14000000",
    des: "Iphone 13",
    imgURL: "./public/images/products/ip3.jpg",
    rating: "5.0"
},
{
    id: 4,
    name: "Iphone 14",
    price_new: "14000000",
    price_old: "15000000",
    des: "Iphone 14",
    imgURL: "./public/images/products/ip4.jpg",
    rating: "5.0"
},
{
    id: 5,
    name: "Iphone 15",
    price_new: "15000000",
    price_old: "17000000",
    des: "Iphone 15",
    imgURL: "./public/images/products/ip5.jpg",
    rating: "5.0"
},
{
    id: 6,
    name: "Iphone 15 pro max",
    price_new: "2000000",
    price_old: "2500000",
    des: "Iphone 15 pro max",
    imgURL: "./public/images/products/ip6.jpg",
    rating: "5.0"
},]

const cartItems = [
    products[0],
    products[2],
    products[3],
]

// app.post("/register", (req,res)=>{
//     var username = req.body.username;
//     var password = req.body.password;
//     console.log(username, password);
// })

// app.get("/api/products", (req,res)=>{
//   res.status(200).json(products);
// })

// app.get('/api/user/:userId/cart', (req, res) => {
//   res.status(200).json(cartItems)
// })

// app.get('/api/products/:productId', (req, res) => {
//   const {productId} = req.params;
//   const product = products.find(product => product.id === productId);
//   if(product){
//     res.status(200).json( product);

//   }else {
//     res.status(404).json({message: "Product not found"})
//   }
// })

app.listen(port, hostname, () => {
  console.log("Running port: ", port);
});
