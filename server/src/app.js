import express from "express";
import dotevn from "dotenv"
import ConnectDb from "./config/db.config.js";
dotevn.config({});

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
  try {
    ConnectDb();
  }
  catch {
    console.log("Connection failled");
  }
});