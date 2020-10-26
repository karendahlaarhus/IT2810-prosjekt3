import express from "express";
import Recipe from "./recipe.model";


const router = express.Router();
  

 router.get("/", async (req, res, e) => {
    try{
        const skipAmount = req.query.skip ? parseInt(req.query.skip) : 0;
        const limitAmount = req.query.limit && req.query.limit === 'none' ? 151 : 5;
        const search = req.query.name;
        //const regex = RegExp(search, 'gi');
        
       // var query = regex.exec(search);
        console.log("query", search);

        if (search) {
            const recipe = await Recipe.find({name: {
                $regex: search,
                $options: "i"
            }})
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




