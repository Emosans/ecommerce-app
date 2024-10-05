import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";

const app = express();
const port = 3000;
const readFile = path.join(__dirname, "products.json");

app.use(express.json());
app.use(cors());
app.use(multer().none());
app.use(
  "/images",
  express.static(path.join(__dirname,"..", "public", "images"))
);

//interfaces
import { Product } from "./types";
import { CartItemInfo } from "./types";

//interface objects
let allProducts: Product[] = [];
let cartItem: CartItemInfo[] = [];

const loadProducts = () => {
  try {
    const data = fs.readFileSync(readFile, "utf-8");
    allProducts = JSON.parse(data);
  } catch (error) {
    console.error("Error");
  }
};

loadProducts();

//apis
app.get("/api/products", (req, res) => {
  res.status(200).send(allProducts);
});

app.post("/api/cart", (req, res) => {
  const { productId, quantity } = req.body;
  const existingCartItem = cartItem.findIndex(
    (item) => item.id === Number(productId)
  );

  if (existingCartItem !== -1) {
    cartItem[existingCartItem].quantity += Number(quantity);
  } else {
    const product = allProducts.find((p) => p.id === Number(productId));
    if (product) {
      const newCartItem: CartItemInfo = {
        id: Number(productId),
        name: product.name,
        price: product.price,
        quantity: Number(quantity),
      };
      cartItem.push(newCartItem);
    } else {
      throw new Error("Product not found");
    }
  }
  res.send({ message: "added to cart" });
});

app.get("/api/cart", (req, res) => {
  res.send(cartItem);
});

app.delete("/api/cart/:id", (req, res) => {
  const { id } = req.params;

  const itemToDeleteIndex = cartItem.findIndex(
    (item) => Number(id) === item.id
  );

  if (itemToDeleteIndex === -1) {
    res.send({ message: "cannot find item" });
  }

  cartItem = cartItem.filter((item) => Number(id) !== item.id);

  res.send({ updatedCart: cartItem });
});

app.post("/api/checkout", (req, res) => {
  res.send({ message: "checkout succesfull" });
});

app.listen(port, () => {
  console.log("Listening");
});
