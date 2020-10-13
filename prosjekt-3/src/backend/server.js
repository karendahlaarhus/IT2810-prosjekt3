/**
 * With this code we’re creating an Express server, attaching the cors and body-parser middleware and making the server listening on port 4000
 */

//export {};

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb://recipedb:recipedb@it2810-36.idi.ntnu.no:27017/?authSource=recipedb",
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

// SETUP ENDPOINTS WITH EXPRESS
const recipeRoutes = express.Router();
app.use("/recipe", recipeRoutes);

// Delivering all available recipe items
recipeRoutes.route("/").get(function (req, res) {
  Recipe.find(function (err, recipe) {
    if (err) {
      console.log(err);
    } else {
      // all available added into a json format
      res.json(recipe);
    }
  });
});

// This path extension is used to retrieve a todo item by providing an ID
recipeRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Recipe.findById(id, function (err, recipe) {
    res.json(recipe);
  });
});

// The route which is needed to be able to add new rating to a recipe item by sending a HTTP post request (/put)
recipeRoutes.put("/:id/:rating").post(function (req, res) {
  recipe
    .save()
    .then((recipe) => {
      res.status(200).json({ _id: "new rating added" });
    })
    .catch((err) => {
      res.status(400).send("adding new rating failed");
    });
});
