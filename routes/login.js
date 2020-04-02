const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const rootDir = require("../utils/path");

const router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/login", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "login.html"));
});

router.post("/login", urlencodedParser, (req, res) => {
  res.send("Username - " + req.body.username);
  console.log(req.body);
});

module.exports = router;
