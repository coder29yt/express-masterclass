const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(expressLayouts);
app.set("layout", "layout");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Coder29 is here",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact me" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
