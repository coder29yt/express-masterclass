// 1 REQUIRING EXPRESS
const express = require("express"); // require keyword helps to import the module

// 2 INITIALIZING EXPRESS IN A VARIABLE
const app = express();

// 3 SETTING UP A PORT
const PORT = 5000;

// 4 LISTENING TO THE PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
