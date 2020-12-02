import React from "react";
import "./pageHeader.css";

const PageHeader = ({ title }) => {
  return (
    <div className="page-header-wrapper">
      <aside className="aside">
        <h2 className="page-header-title">{title}</h2>
      </aside>
    </div>
  );
};

export default PageHeader;
