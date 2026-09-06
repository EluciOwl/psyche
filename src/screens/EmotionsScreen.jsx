import { useState } from "react";
import "./EmotionsScreen.css";
import HomeButton from "../components/HomeButton.jsx";

function EmotionsScreen({ onNavigate }) {
  return (
    <div className="emotions-screen">
      <HomeButton onClick={() => onNavigate("home")} />
    </div>
  );
}
export default EmotionsScreen;
