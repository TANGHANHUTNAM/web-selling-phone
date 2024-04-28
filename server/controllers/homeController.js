const getHomepage = (req, res) => {
  //call model
  res.send("Hello World" + req.ip);
};

module.exports = { getHomepage };
