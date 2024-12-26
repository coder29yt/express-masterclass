// UNDERSTANDING MIDDLEWARES

const express = require("express");
const app = express();
const port = 3000;

const verifyUser = (err, req, res, next) => {
  console.log("User verified");
  next();
};


// ROUTER LEVEL MIDDLEWARE USECASE

app.use("/user", verifyUser, (req, res) => {
  res.send("Welcome to the user page");
});

// BUILT IN MIDDLEWARES
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
