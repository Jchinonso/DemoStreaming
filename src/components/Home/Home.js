import React, { Fragment } from "react";
import PageHeader from "../Common/PageHeader";
import {withRouter } from "react-router-dom";
import './Home.css'

const Home = ({ history }) => {
  return (
    <Fragment>
      <PageHeader title={"Popular Titles"} />
      <main className="home-main">
        <div className="home-row">
          <span
            className="home-item"
            onClick={() => {
              history.push("/series");
            }}
          >
            <span className="home-box">
              <i className="placeholder"/>
              <p className="home-title">Series</p>
            </span>
            <p className="under-title">Popular Series</p>
          </span>
          <span className="home-item"
            onClick={() => {
              history.push("/movies");
            }}
          >
            <span className="home-box">
              <i className="placeholder"/>
              <p className="home-title">Movies</p>
            </span>
            <p className="under-title">Popular Movies</p>
          </span>
        </div>
      </main>
    </Fragment>
  );
};


export default withRouter(Home);
