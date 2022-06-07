// import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>Page Not Found</h1>
      <Link className="home-link" to="/home">
        HOME
      </Link>
    </div>
  );
};

export default NotFound;
