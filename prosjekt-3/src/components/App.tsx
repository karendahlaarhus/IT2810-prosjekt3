import React from "react";
import { Provider } from "react-redux";
import RecipeContainer from "./RecipeContainer";
import store from "../store/store";
import "../styles/App.css";
import header from "../images/foods.jpg";

function App() {
  return (
    <div style={{ padding: "10vw", backgroundImage: `url(${header})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', zoom:1}}>
      <Provider store={store}>
      
        
        <div style={{zIndex:1, backgroundColor: "white", opacity: 0.95}}>
        <RecipeContainer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
