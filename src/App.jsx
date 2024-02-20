import React from "react";
import "./App.css";
import Card from "../components/card";
import Navbar from "../components/navbar";
import data from "./data"

function App() {
  const cards = data.map(dataItems => {
      return(
        <Card
            key = {dataItems.id}
            img = {dataItems.img}
            country = {dataItems.country}
            place = {dataItems.place}
            year = {dataItems.year}
            desc = {dataItems.description}
        />
      )
  })

  return (
    <>
      <div className="container">
        <Navbar className="nav" />

        <div className="main-content">
          {cards}
        </div>

      </div>
    </>
  );
}

export default App;
