const express = require("express"); //
const app = express();
const PORT = 5000;
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 20 * 1000, // 20 seconds
  max: 5, // limit each IP to 2 requests per windowMs
  message: "Bhai 20 sec ke baad try mar, you can't do it now",
});

app.use(limiter);
app.get("/", (req, res) => {
  res.send("<h1><center>Home Page</center></h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
