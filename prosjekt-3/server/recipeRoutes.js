import express from "express";
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



router.get("/", async (req, res, e) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit && req.query.limit === "none" ? 529 : 15;
    const skip = (parseInt(page) - 1) * 15;
    const search = req.query.name ? req.query.name.toLowerCase() : "";
    const tags = req.query.tags.toString().split(',');
    const sortOrder = req.query.sortOrder;
    const sortBy = req.query.sortBy;
    let filter = {};
    

    function determineSort(order, by) {
      //default sort is alphabetical after recipe name
      let sortParameter = { };
      //sort desc
      if (order === "desc" && by === "servings") {
        console.log("sort", sortOrder, "sort by", sortBy);
        sortParameter = { servings: -1 };
      } else if (order === "desc" && by === "name") {
        console.log("sort", sortOrder, "sort by", sortBy);
        sortParameter = { name: -1 };
      } else if (order === "asc" && by === "servings") {
        console.log("sort", sortOrder, "sort by", sortBy);
        sortParameter = { servings: 1 };
      } else if (order === "asc" && by === "name") {
        console.log("sort", sortOrder, "sort by", sortBy);
        sortParameter = { name: 1 };
      }
      return sortParameter;
    }
     

    if (tags.length >= 0) {
      filter.$and = [
        { tags: { $in: tags } },
        {
        name: new RegExp(search, 'i')
          /* name: {
            $regex: search,
            $options: "i",
          },

        } */}];
    } else {
      /* filter.name = {
        $regex: search,
        $options: "i",
      };
    } */
      filter.name = {
        name: new RegExp(search, 'i')}
    }

    if (filter) {
      const recipe = await Recipe.find(filter)
        .sort(determineSort(sortOrder, sortBy))
        .skip(skip)
        .limit(limit);
      res.json(recipe);
    } else {
      const recipe = await Recipe.find()
        .sort(determineSort(sortOrder, sortBy))
        .skip(skip)
        .limit(limit);
      res.json(recipe);
    }
  } catch (err) {
    res.json({ message: err });
  }
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

export default router;
