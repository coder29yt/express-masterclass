const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

const products = [
  { id: 1, name: "laptop", price: 1000 },
  { id: 2, name: "mouse", price: 20 },
  { id: 3, name: "keyboard", price: 50 },
  { id: 4, name: "monitor", price: 200 },
];

// FETCH ALL PRODUCTS
app.get("/api/products", (req, res) => {
  res.status(200).json({ success: true, data: products });
});

// FETCH SINGLE PRODUCT
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: `No product found` });
  }
  return res.status(200).json({ success: true, data: product });
});

// UPDATE A PRODUCT
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: `No product found` });
  }

  if (name) {
    product.name = name;
  }

  if (price) {
    product.price = price;
  }

  return res.status(200).json({ success: true, data: product });
});

// DELETE A PRODUCT
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;

  const productList = products.filter((product) => product.id !== Number(id));

  return res.status(200).json({ success: true, data: productList });
});

// CREATE A PRODUCT
app.post("/api/create-product", (req, res) => {
  const { id, name, price } = req.body;

  const newProduct = { id, name, price };

  products.push(newProduct);

  return res.status(201).json({
    success: true,
    data: newProduct,
    message: "Product added successfully",
  });
});

// Version in URL
app.get("/api/v1/products", (req, res) => {
  const newProducts = [
    { id: 1, name: "tshirt", price: 1000 },
    { id: 2, name: "shirt", price: 20 },
    { id: 3, name: "helmet", price: 50 },
    { id: 4, name: "gloves", price: 200 },
  ];
  res.status(200).json({ success: true, data: newProducts });
});

app.get("/api/v2/products", (req, res) => {
  const newProducts = [
    { id: 1, name: "Mangoes", price: 10 },
    { id: 2, name: "Papaya", price: 20 },
    { id: 3, name: "Apple", price: 50 },
    { id: 4, name: "Dragon", price: 200 },
  ];
  res.status(200).json({ success: true, data: newProducts });
});

// Version in Headers
app.get("/api/newproducts", (req, res) => {
  const version = req.headers["api-version"] || "v1";
  let newProducts = [];

  if (version === "v1") {
    newProducts = [
      { id: 1, name: "tshirt", price: 1000 },
      { id: 2, name: "shirt", price: 20 },
      { id: 3, name: "helmet", price: 50 },
      { id: 4, name: "gloves", price: 200 },
    ];
  } else if (version === "v2") {
    newProducts = [
      { id: 1, name: "Mangoes", price: 10 },
      { id: 2, name: "Papaya", price: 20 },
      { id: 3, name: "Apple", price: 50 },
      { id: 4, name: "Dragon", price: 200 },
    ];
  }
  return res.status(200).json({ success: true, version, data: newProducts });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
