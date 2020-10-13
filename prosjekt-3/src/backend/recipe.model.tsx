const mongoose = require("mongoose");
const Schema = mongoose.Schema;
export {};

let Recipe = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  ingredients: [String],
  preptime: {
    type: Number
  },
  servings: {
    type: Number,
  },
  instructions: {
    type: String
  },

  tags: {
    type: [String]
  },

  //current average rating
  rating: {
    type: Number,
  },

  //number of ratings
  userReviews: {
    type: Number,
  },
});

module.exports = mongoose.model("Recipe", Recipe);
