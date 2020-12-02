import React from "react";
import { withRouter } from "react-router-dom";

import "./header.css";

const Header = ({ history }) => {
  return (
    <div className="wrapper">
      <aside className="aside">
        <h1
          className="title"
          onClick={() => {
            history.push("/");
          }}
        >
          DEMO Streaming
        </h1>
      </aside>
      <aside className="aside">
        <span className="span login">Log in</span>
        <span className="span">Start your free trial</span>
      </aside>
    </div>
  );
};

export default withRouter(Header);
