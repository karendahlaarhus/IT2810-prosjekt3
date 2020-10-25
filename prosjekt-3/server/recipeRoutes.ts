import express from "express";
import Recipe from "./recipe.model";
const router = express.Router();

router.get('/:name', async (req, res) => {
    try {
      const updatedRecipe = await Recipe.find(
        { name: req.params.name });
      res.json(updatedRecipe);
    } catch (err) {
      res.json({ message: err });
    }
  });
  

 router.get("/", async (req, res, e) => {
    try{
        //const types = [];
        //const skipAmount = req.query.skip ? parseInt(req.query.skip) : 0;
        //const name = req.query.name ? req.query.name.toLocaleLowerCase() : '';
        const limitAmount =
            req.query.limit && req.query.limit === 'none' ? 400 : 5;
        const sort = {};
        const filter = {};
    
        const recipe = await Recipe.find(filter)
        .sort(sort)
        .skip(10)
        .limit(limitAmount);
        res.json(recipe);
         
    }catch (err){
        res.json({message: err});
    }
});

export default router;




