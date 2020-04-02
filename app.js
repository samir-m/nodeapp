const path = require("path");

const express = require("express");

const loginRoutes = require("./routes/login");
const dashboardRoutes = require("./routes/dashboard");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(loginRoutes);

app.use(dashboardRoutes);

app.use("/", (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h2>Main Page</h2>");
});

app.listen(3000);
