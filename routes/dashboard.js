const express = require("express");

const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.send("<h1>Dashboard Page</h1>");
});

module.exports = router;
