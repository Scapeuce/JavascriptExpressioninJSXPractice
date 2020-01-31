import React from "react";
import ReactDOM from "react-dom";
const myName = "Andres Lillo";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
ReactDOM.render(
  <div>
    <p> Created by {myName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
