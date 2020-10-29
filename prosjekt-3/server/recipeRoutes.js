import express from "express";
import Recipe from "./recipe.model";


const router = express.Router();
  

 router.get("/", async (req, res, e) => {
    try{
        const skipAmount = req.query.skip ? parseInt(req.query.skip) : 0;
        const limitAmount = req.query.limit && req.query.limit === 'none' ? 529 : 10;
        const name = req.query.name ? req.query.name.toLocaleLowerCase() : '';
        const sort = req.guery.sort;
        //const tags = req.query.tags

        if (name) {
            const recipe = await Recipe.find({name: {
                $regex: name,
                $options: "i"
            }})
                .sort(sort)
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




