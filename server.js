// imports statics
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// routes import
const chickenRoutes = require("./routes/chickenRoutes");
const farmyardRoutes = require("./routes/farmyardRoutes");


// config
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use("/chicken", chickenRoutes);
app.use("/farmyard", farmyardRoutes);

// mongoose
const mongoconnection = require("./config/mongoconnection.json");
mongoose.connect(mongoconnection.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to Mongo Database!");
});

// server 
const server = http.createServer(app);
server.listen(5000, () => console.log("Server is running on port 5000..."));
