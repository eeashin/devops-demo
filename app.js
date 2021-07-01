const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Company X application");
});

app.get("/feature-1", (req, res) => {
  res.send("Feature 1!");
});

app.get("/feature-2", (req, res) => {
  res.send("Feature 2!");
});

module.exports = app;
