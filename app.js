const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("Express demo");
  res.send("<h1>Express demo</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Main Page</h1>");
});

app.listen(3000);
