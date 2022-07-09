import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

import {createRoles} from "./libs/InitialSetup";

import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";


const app = express();

createRoles();

app.set("pkg", pkg);

app.use(express.json());
app.use(morgan("dev"));

// Welcome Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my Products API",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
});

app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);

export default app;