/**
 * With this code we’re creating an Express server, attaching the cors and body-parser middleware and making the server listening on port 4000
 */

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";


import recipeRoutes from "./recipe"

/**
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

 */

const app = express();
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());

// SETUP ENDPOINTS WITH EXPRESS
// API for uthenting av informasjon
app.use("/recipe", recipeRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("We are on home");
})

mongoose.connect(
  "mongodb://recipedb:recipedb@it2810-36.idi.ntnu.no:27017/recipedb",
  {
    useNewUrlParser: true,
  }
);


const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});










