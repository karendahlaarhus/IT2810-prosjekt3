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

 router.get("/", async (req, res, e) => {
    try{
        const page = req.query.page;
        const limit = req.query.limit && req.query.limit === 'none' ? 529 : 10;
        const skip = ((parseInt(page)-1) * 20);
        const search = req.query.name ? req.query.name.toLowerCase() : '';
        const tags = req.query.tags.toString();
        const filter = {};
        
        if (tags.length !== 0) {
            filter.$and = [
              { tags: { $in: tags } }, 
              { name: {
                  $regex: search,
                  $options: 'i'}}
              ];
          } 
          else {
            filter.name = {
            $regex: search,
            $options: 'i'
          };
        }
      
        if(filter) {
          const recipe = await Recipe.find(filter)
              .skip(skip)
              .limit(limit)
              res.json(recipe);
          }
        else{
          const recipe = await Recipe.find()
            .skip(skip) 
            .limit(limit)
            res.json(recipe);
        }}
        catch (err){
        res.json({message: err});
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
