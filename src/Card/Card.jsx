import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="title">{props.drink.name}</div>
      {/* <div class="desc">Men's training shoe</div> */}
      <div className="slider">
        <img src={props.drink.image} />
      </div>

      <div className="info">
        <div className="type">{props.drink.type}</div>
        <button className="btn">info</button>
      </div>
    </div>
  );
}
