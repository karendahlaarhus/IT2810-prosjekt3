const mongoose = require("mongoose");
const Schema = mongoose.Schema;
export {};

let Recipe = new Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  ingredients: [String],
  servings: {
    type: Number,
  },
  vegetarian: {
    type: Boolean,
  },
  image: {
    type: String,
    format: URL,
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
