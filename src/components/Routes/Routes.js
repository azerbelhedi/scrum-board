import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Backlog from "../Backlog/Backlog";
import Sprint from "../Sprint/Sprint";
import NavBar from "../NavBar/NavBar";
import UserStory from "../UserStory/UserStory";

const Routes = props => {
  return (
    <div className="app-body">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/backlog" component={Backlog} />
        <Route path="/sprint" component={Sprint} />
        <Route path="/user-story" component={UserStory} />
      </Router>
    </div>
  );
};

export default Routes;
