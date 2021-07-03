//import express
import express from "express";

// init express
const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

// About route
app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page");
});
// listen on port
app.listen(3000, () => console.log("Server Running at http://localhost:3000"));
