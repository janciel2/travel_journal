import React from "react";
import "../css/card.css";

export default function Card(props) {
  return (
    <>
      <div className="container-card">
        <img src= {`../src/assets/${props.img}`} alt="image" id="image-loc" />
        <div className="left-content">
          <section className="description">
            <img src="../src/assets/Fill219.png" alt="loc" id="loc-logo" />
            <h4 className="open-sans-country">{props.country}</h4>
            <h4 className="open-sans-view">
              <a href="#">View on Google Maps</a>
            </h4>
          </section>
          <h1 className="open-sans-cardtitle">{props.place}</h1>
          <h3 className="open-sans-carddate">{props.year}</h3>
          <p className="open-sans-desc">{props.desc}</p>
        </div>
      </div>
    </>
  );
}
