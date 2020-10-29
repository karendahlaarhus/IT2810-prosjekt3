import express from "express";
import Recipe from "./recipe.model";

const router = express.Router();

router.route("/update/:id").put(function (req, res) {
  let id = req.params._id;
  Recipe.findById(id, function (err, recipe) {
    if (!recipe) {
      res.status(404).send("Data is not found");
    } else {
      const rating = req.body.rating;
      if (rating !== null && rating !== "") {
        const oldRating = [...book.rating];
        book.rating = [...oldRating, rating];
      }
      Recipe.save()
        .then((recipe) => {
          res.json("Book review rating given: " + rating);
          console.log(rating);
        })
        .catch((err) => {
          res.status(400).send("Rating not given");
        });
    }
  });
});

router.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Recipe.findById(id, function (err, recipe) {
    res.json(recipe);
  });
});

router.get("/", async (req, res, e) => {
  try {
    const skipAmount = req.query.skip ? parseInt(req.query.skip) : 0;
    const limitAmount = req.query.limit && req.query.limit === "none" ? 151 : 5;
    const search = req.query.name;
    //const regex = RegExp(search, 'gi');

    // var query = regex.exec(search);
    console.log("query", search);

    if (search) {
      const recipe = await Recipe.find({
        name: {
          $regex: search,
          $options: "i",
        },
      })
        .skip(skipAmount)
        .limit(limitAmount);
      res.json(recipe);
    } else {
      const recipe = await Recipe.find({}).skip(skipAmount).limit(limitAmount);
      res.json(recipe);
    }
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
