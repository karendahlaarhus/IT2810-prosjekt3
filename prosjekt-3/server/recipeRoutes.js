import express from "express";
import { monitorEventLoopDelay } from "perf_hooks";
import Recipe from "./recipe.model";

const router = express.Router();

router.route("/update/:id").put(function (req, res) {
  console.log(req.body); //vil lagre denne verdien til databasen
  const filter = { id: req.body._id };
  const update = { preptime: req.body.preptime };
  Recipe.findOneAndUpdate(filter, update, {
    new: true,
  }).then((data) => {
    console.log("hei");
    res.json(data);
  });
});

router.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Recipe.find({ id }, function (err, recipe) {
    res.json(recipe);
  });
});

// let id = req.params._id;
// console.log(id);
// Recipe.findById(id, function (err, recipe) {
//   const rating = req.body.rating;
//   if (rating !== null && rating !== "") {
//     //preptime = recipe.rating;
//     const oldRating = [...Recipe.rating];
//     Recipe.rating = [...oldRating, rating];
//   }
//   Recipe.save()
//     .then((recipe) => {
//       res.json("Rating" + rating);
//       console.log(rating);
//     })
//     .catch((err) => {
//       res.status(400).send("Rating not given");
//     });
// });

//for å hente ut kun et element

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
