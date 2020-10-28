import express from "express";
import Recipe from "./recipe.model";


const router = express.Router();
  

 router.get("/", async (req, res) => {
    try{
        const skipAmount = req.query.skip ? parseInt(req.query.skip) : 0;
        const limitAmount = req.query.limit && req.query.limit === 'none' ? 151 : 10;
        const search = req.query.name;
        const ascending = req.query.ascending; //Hva skal skrives her? 
   


        function determineSort(_req) {
            //default sort is alphabetical after recipe name
            let sortParameter = {name:1};

            //sort desc
            if (_req.query.ascending == false){
                console.log('sort by desc');
                sortParameter = {name:-1};
            }

            else {
                console.log('sort by asc')
            }
            return sortParameter;
        }
 
    
       

        if (search) {
            //console.log("sort key: ", sortKey);
            const recipe = await Recipe.find({name: {
                $regex: search,
                $options: "i"
            }}) .sort(determineSort(ascending))
                .skip(skipAmount)
                .limit(limitAmount);
                res.json(recipe);
        }
        
        else{
            const recipe = await Recipe.find({})
            .sort(determineSort(ascending))
            .skip(skipAmount) 
            .limit(limitAmount);
            res.json(recipe);

        }
    
     
         
    }catch (err){
        res.json({message: err});
    }
});

export default router;




