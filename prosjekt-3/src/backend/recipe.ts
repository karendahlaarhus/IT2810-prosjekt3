import express from "express";
const router = express.Router();
import Recipe from "./recipe.model";

 router.get("/", async (req, res) => {
    try{
        const recipe = await Recipe.find();
        res.json(recipe);
        console.log(recipe)
    }catch (err){
        res.json({message: err});
    }
})
 

export default router;




