import { useState } from "react";
import "./EmotionsScreen.css";
import homeImg from "../assets/images/home-button.png";

function EmotionsScreen({ onNavigate }) {
  return (
    <div className="emotions-screen">
      <button className="home-button" onClick={() => onNavigate("home")}>
        <img src={homeImg} alt="Emotions" />
      </button>
    </div>
  );
}
export default EmotionsScreen;
