import express from "express";
import Recipe from "./recipe.model";
const router = express.Router();
  

 router.get("/", async (req, res, e) => {
    try{
        console.log(typeof req.query.name)
        const searchword = req.query.name;
        const limitAmount = req.query.limit && req.query.limit === 'none' ? 400 : 5;
    
        const recipe = await Recipe.find()
        .skip(10)
        .limit(limitAmount);
        res.json(recipe);
         
    }catch (err){
        res.json({message: err});
    }
});

export default router;




