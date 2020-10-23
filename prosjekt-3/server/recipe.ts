import express from "express";
import Recipe from "./recipe.model";
const router = express.Router();

 router.get("/", async (req, res, e) => {
    try{
        const recipe = await Recipe.find({});
        res.json(recipe);
        
        
       
    }catch (err){
        res.json({message: err});
    }
})
 

export default router;




