import React, { useEffect, useState } from 'react'
import { connect, ConnectedProps, useDispatch, useSelector}  from 'react-redux';
import { sendQuery } from '../store/actions/action';
import { RootState } from '../store/reducers';
import initialState from '../store/reducers/searchReducer'


const mapState = (state: typeof initialState) => ({
    text: state.name
  });

const mapDispatch = {
    sendQuery: () => ({ type: 'SEND_QUERY' })
  }

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    text: string
}

const RecipeDisplay = (props: Props) => {
    const [error, setError] = useState(false);
    const [recipes, setRecipes] = useState<any[]>([]); 
    const [searchWord, setSearchWord] = useState<string[]>([]);

    
    const searchText = useSelector((state: RootState) => state.recipes.text)
    //const recipes: Recipe[] = useSelector((state: RecipiesState) => state.recipes);

    useEffect(() => {
        async function fetchData() {
            console.log(searchText)
            const response = await fetch(`http://localhost:4000/recipe?name=${searchText    }`);
            const data = await response.json().catch(err => setError(err));
            //console.log("Data: ", data)
            setRecipes(data);
        }
        fetchData();
    }, [searchText])
   
    return (
        <div>
        {console.log(recipes)}
        {recipes.map(recipe => (
            <div>
                <li key={recipe.id}> 
                name: {recipe.name} </li>
            </div>
            
        ))}
        </div>
    )
}
    
export default connector(RecipeDisplay);
    

    
