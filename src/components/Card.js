import React from "react";
import "./Card.css";

export default function Card(props) {
  let sellBadged;
  if (props.openSpots === 0) {
    sellBadged = "SOLD OUT";
  } else if (props.location === "Online") {
    sellBadged = "ONLINE";
  }

  let coverImg =
    props.id > 3 ? (
      <img className="mainImg onlineImg" src={`${props.coverImg}`} alt="card" />
    ) : (
      <img className="mainImg" src={`./images/${props.coverImg}`} alt="card" />
    );
  return (
    <main>
      <section>
        {sellBadged && <div className="sold">{sellBadged}</div>}
        {coverImg}
        <div className="span-items">
          <img src="./images/Star1.png" alt="ratingLogo" />
          <span>{props.stats.rating}</span>
          <span>( {props.stats.reviewCount} )</span>.
          <span>{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p>
          <strong>From ${props.price}</strong> / person
        </p>
      </section>
    </main>
  );
}
