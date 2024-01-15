import React from "react";
import Waves from "./Waves";
import "./header.css";
import Quiz from "../Quiz/Quiz";

function Header() {
  return (
    <div className="header">
      <div className="inner-header flex">
        <h1>Göteborg</h1>
        <Quiz />
      </div>
      <Waves />
    </div>
  );
}

export default Header;
