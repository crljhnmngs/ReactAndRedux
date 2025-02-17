import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import ManageCousesPage from "./courses/ManageCousesPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="container-fluid mt-5">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/courses" component={CoursesPage}></Route>
        <Route path="/course/:slug" component={ManageCousesPage}></Route>
        <Route path="/course" component={ManageCousesPage}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar></ToastContainer>
    </div>
  );
};

export default App;
