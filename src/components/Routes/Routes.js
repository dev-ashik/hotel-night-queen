import React, {createContext, useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Book from "../Book/Book";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const userContext = createContext();

const Routes = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/Book/:roomid">
            <Book />
          </PrivateRoute>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
};

export default Routes;
