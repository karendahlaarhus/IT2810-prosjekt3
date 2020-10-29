/**
 * With this code we’re creating an Express server, attaching the cors and body-parser middleware and making the server listening on port 4000
 */

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import recipeRoutes from './recipeRoutes'
import { connect } from "http2";
import Recipe from "./recipe.model";
import { monitorEventLoopDelay } from "perf_hooks";
const PORT = 4000;

mongoose.connect(
  "mongodb://recipedb:recipedb@it2810-36.idi.ntnu.no:27017/recipedb?authSource=recipedb",
  {useNewUrlParser: true,}).then(() => {
      const app = express();
      app.use(cors());
      app.use(bodyParser.json());

  // API for uthenting av informasjon

  // Routes
  app.use("/recipe", recipeRoutes);
  app.use(express.json());
  
  
  
  // app.put("/update/:id", (req, res) => {
  //   //res.send("POST request to the homepage");
  //   console.log(req.body);
  //   const data = req.body;
  //   //const newRecipeModel = new Recipe(data)
  //   Recipe.findOneAndUpdate(req.body._id, req.body.preptime) //forstå 
  //   console.log(req.body.preptime);
  //   console.log(req.body.id);
  // })

  

  // app.put("/id/:id", (req, res, next) => {
  //   if(Recipe.find({_id: req.params.id})) {
  //     Recipe.updateOne(req.body).then(data) => res.json(data)).catch(next);
  //   }
  //   else{
  //     res.json({})
  //   }
  // })
    
    // ((error: any) => {
    //   if(error){
    //     res.status(500).json({status: "sorry, fail"})
    //   }else{
    //     res.json({
    //       status: 'success',
    //       prep: data.rating,
    //     });

    //   }
    // })
    
 // })
  //Routes
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











