import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [animateDir, setDir] = useState("animate-down");
  const animateClass = "stone" + " " + animateDir;
  setInterval(function() {
    if (animateDir === "animate-down") setDir("animate-up");
    else setDir("animate-down");
  }, 8000);

  return (
    <div className="App">
      <div>
        Animate the boxes given below as shown in
        <a href="https://player.vimeo.com/video/356567201">this video!</a>
        <br />
        <i>Note: You can use JS/CSS to solve the problem.</i>
      </div>
      <br />

      <div className="container">
        <div className={animateClass}>R</div>
        <div className={animateClass}>E</div>
        <div className={animateClass}>D</div>
        <div className={animateClass}>B</div>
        <div className={animateClass}>O</div>
        <div className={animateClass}>O</div>
        <div className={animateClass}>K</div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
