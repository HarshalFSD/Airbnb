import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <figure className="header-img">
        <img className="gridImg" src="../images/gridImg.png" alt="grid" />
      </figure>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </header>
  );
}
