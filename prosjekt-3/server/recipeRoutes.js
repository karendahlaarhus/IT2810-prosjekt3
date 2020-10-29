import express from "express";
import Recipe from "./recipe.model";


const router = express.Router();
  

 router.get("/", async (req, res, e) => {
    try{
        const skipAmount = req.query.skip ? parseInt(req.query.skip) : 0;
        const limitAmount = req.query.limit && req.query.limit === 'none' ? 529 : 10;
        const search = req.query.name ? req.query.name.toLowerCase() : '';
        const tags = []

        if (search) {
            const recipe = await Recipe.find({name: {
                $regex: search,
                $options: "i"
            }})
                //.sort(sort)
                .skip(skipAmount) 
                .limit(limitAmount);
                res.json(recipe);
        }else{
            const recipe = await Recipe.find({})
            .skip(skipAmount) 
                .limit(limitAmount);
                res.json(recipe);
        }
             
    }catch (err){
        res.json({message: err});
    }
});

export default router;




