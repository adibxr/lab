import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ textAlign: "center", marginTop: 100 }}>
    <h1>404</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to="/">Go back home</Link>
  </div>
);

export default NotFound;