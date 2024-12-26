const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/v1/bootcamps", (req, res) => {
  const bootcamps = [
    {
      id: 1,
      name: "Devworks Bootcamp",
      description: "Awesome bootcamp",
    },
    {
      id: 2,
      name: "ModernTech Bootcamp",
      description: "Awesome bootcamp",
    },

    {
      id: 3,
      name: "Web Development Bootcamp",
      description: "Awesome bootcamp",
    },
  ];
  res.status(200).json({ success: true, data: bootcamps });
});

app.get("/api/v1/languages", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Javascript",
      description: "Awesome language",
    },
    {
      id: 2,
      name: "Python",
      description: "Awesome language",
    },

    {
      id: 3,
      name: "Java",
      description: "Awesome language",
    },
  ];
  res.status(200).json({ success: true, data: products });
});

app.get("/", (req, res) => {
  res.send("<h1><center>Home page of API</center></h1");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
