const express = require("express");
const app = express();
require("dotenv").config();
require("./services/DB");

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;



const configViewEngine = require("./config/viewEngine");
configViewEngine(app);
app.use(express.json())


const webRoutes = require("./routes/web");
app.use("/", webRoutes);
// const userRoutes = require("./routes/user")
// app.use("/users", userRoutes)
// const studentRoutes = require("./routes/student")
// app.use("/students", studentRoutes)
const authRoutes = require("./routes/auth")
app.use("/api/auth", authRoutes)



app.listen(port, hostname, () => {
  console.log("Running port: ", port);
});
