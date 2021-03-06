import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import getCurrentUser from "../services/getCurrentUser"
import "../assets/scss/main.scss"
import RegistrationForm from "./registration/RegistrationForm"
import SignInForm from "./authentication/SignInForm"
import TopBar from "./layout/TopBar"
import YelpRequestForm from "./YelpRequestForm"
import PlacesList from "./PlacesList"
import FavoritePlacesList from "./FavoritePlacesList"

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(() => {
        setCurrentUser(null);
      });
  }, []);
  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={YelpRequestForm} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/yelp" component={YelpRequestForm} />
        <Route exact path="/places" render={(props) => <PlacesList {...props}/>} />
        <Route exact path="/user-favorites" component={FavoritePlacesList} />
      </Switch>
    </Router>
  );
};

export default hot(App);
