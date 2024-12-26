// FUNCTIONS

const hello = (req, res) => {
  res.send("Hello World");
};

const getData = (req, res) => {
  res.send("Data is here");
};

module.exports = { hello, getData };
