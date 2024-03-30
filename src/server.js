const express = require("express");
const app = express();
require("dotenv").config();
const webRoutes = require("./routes/web");

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

const configViewEngine = require("./config/viewEngine");
configViewEngine(app);

app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log("Running port: ", port);
});
