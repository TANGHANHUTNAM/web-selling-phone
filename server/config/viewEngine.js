const express = require("express");
const path = require("path");
const configViewEngine = (app) => {
  app.use(express.static(path.join("./src", "public")));
  console.log(path.join("./src", "public"));
};

module.exports = configViewEngine;
