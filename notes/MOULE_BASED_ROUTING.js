const express = require("express");
const authRoutes = require("../EXPRESS_MASTERCLASS/routes/authRoutes");
const app = express();
const port = 5000;

app.use("/api", authRoutes);
app.use("/profile", authRoutes);

app.get("/", (req, res) => {
  res.send("This is our homepage");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
