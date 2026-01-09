const express = require("express");
const path = require("path");
const emailRoutes = require("./routes/emailRoutes");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/api/email", emailRoutes);

module.exports = app;
