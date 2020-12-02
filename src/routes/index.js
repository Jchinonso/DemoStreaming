import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Series from "../components/Series/Series";
import Movies from "../components/Movies/Movies";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./index.css";

const Routes = () => {
  return (
    <div className="main-container">
      <div className="main">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/series">
            <Series />
          </Route>
        </Switch>

        <Footer />
      </div>
    </div>
  );
};

export default Routes;
