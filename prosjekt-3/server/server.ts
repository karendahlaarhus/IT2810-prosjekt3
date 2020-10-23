/**
 * With this code we’re creating an Express server, attaching the cors and body-parser middleware and making the server listening on port 4000
 */

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import recipeRoutes from "./recipe"
const PORT = 4000;

mongoose.connect(
  "mongodb://recipedb:recipedb@it2810-36.idi.ntnu.no:27017/recipedb?authSource=recipedb",
  {
    useNewUrlParser: true,
  }
).then(() => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  // API for uthenting av informasjon
  
  // Routes
  app.use("/recipe", recipeRoutes);
  // Routes
  app.get("/", (req, res) => {
    res.send("We are on home");
  })

  app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

});

const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});











