const getHomepage = (req, res) => {
  //call model
  console.log("Running");
  res.send("Hello World");
};

module.exports = { getHomepage };
