import express from "express";
const router = express.Router();
import Recipe from "./recipe.model";

 router.get("/", async (req, res, e) => {
    try{
        const recipe = await Recipe.find({});
        res.json(recipe);
        console.log("hello")
        
       
    }catch (err){
        res.json({message: err});
    }
})
 

export default router;




