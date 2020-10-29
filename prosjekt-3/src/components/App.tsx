import React, { useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/App.css";
import { Provider } from "react-redux";

import RecipeContainer from "./RecipeContainer";
import store from "../store/store";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <div style={{ padding: "0 7vw 0 7vw" }}>
      <Provider store={store}>
        <Router>
          <br></br>
          <RecipeContainer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
