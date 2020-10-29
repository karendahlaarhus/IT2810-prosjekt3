import mongoose from "mongoose";
const Schema = mongoose.Schema;


let Recipe = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  ingredients: [String],
  preptime: {
    type: [Number]
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
    type: [Number],
  },

  //number of ratings
  userReviews: {
    type: Number,
  },
});

export default mongoose.model("recipedb", Recipe, "recipedb");
