import { useState } from "react";
import "./EmotionsScreen.css";
import HomeButton from "../components/HomeButton.jsx";

function EmotionsScreen({ onNavigate }) {
  return (
    <div className="emotions-screen">
      <div className="input-panel">
        <div className="input-group">
          <input
            type="text"
            className="emotions-input"
            maxLength="15"
            autoComplete="off"
          />
          <div className="sparkle-effect">
            <button className="add-button">+</button>
          </div>
        </div>
        <div className="emotion-list"></div>
      </div>
      <div className="drop-panel">
        <HomeButton onClick={() => onNavigate("home")} />
        <div className="drop-zone">
          <span className="drop-text">drop cloud here</span>
        </div>
        <button className="confirm-button">Release</button>
      </div>
      <div className="cloud-list"></div>
    </div>
  );
}
export default EmotionsScreen;
