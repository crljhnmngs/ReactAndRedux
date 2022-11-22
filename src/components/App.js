import React from "react";
import { Route } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";

const App = () => {
  return (
    <div className="container-fluid">
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/about" component={AboutPage}></Route>
    </div>
  );
};

export default App;
