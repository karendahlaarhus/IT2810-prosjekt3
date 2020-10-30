import express from "express";
import Recipe from "./recipe.model";

const router = express.Router();

router.route("/update/:id").put(function (req, res) {
  const filter = { id: req.body._id };
  const update = { preptime: req.body.preptime };
  Recipe.findOneAndUpdate(filter, update, {
    new: true,
  }).then((data) => {
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
    const limit = req.query.limit && req.query.limit === "none" ? 529 : 10;
    const skip = (parseInt(page) - 1) * 10;
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
        sortParameter = { servings: -1 };
      } else if (order === "desc" && by === "name") {
        sortParameter = { name: -1 };
      } else if (order === "asc" && by === "servings") {
        sortParameter = { servings: 1 };
      } else if (order === "asc" && by === "name") {
        sortParameter = { name: 1 };
      }
      return sortParameter;
    }
     
    if (tags[0].length === 0) {
      filter.$and = [
        { name: {
          $regex: search,
          $options: "i",
        },
      }];
    }
    else{
      filter.$and = [
        { tags: { $in: tags } },
        { name: {
          $regex: search,
          $options: "i",
        },
      }];
    };
    
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

export default router;
