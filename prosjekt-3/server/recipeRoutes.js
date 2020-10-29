import express from "express";
import Recipe from "./recipe.model";

const router = express.Router();
  

 router.get("/", async (req, res, e) => {
    try{
        const page = req.query.page;
        const limit = req.query.limit && req.query.limit === 'none' ? 529 : 20;
        const skip = ((parseInt(page)-1) * 20);
        const search = req.query.name ? req.query.name.toLowerCase() : '';
        //const tags = req.query.filters.toString().split(',');
        const filter = {};
        
        if (search/* tags.length !== 0 */) {
            filter.$and = [
             /*  { tags: { $in: tags } }, */
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
              .limit(limit);
              res.json(recipe);
          }
        else{
          const recipe = await Recipe.find()
            .skip(skip) 
            .limit(limit);
            res.json(recipe);
        }}
        catch (err){
        res.json({message: err});
      }
  });
export default router;




