import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import ThoughtsScreen from "./screens/ThoughtsScreen";
import EmotionsScreen from "./screens/EmotionsScreen";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("home");

  return (
    <>
      {screen === "home" && <HomeScreen onNavigate={setScreen} />}
      {screen === "thoughts" && <ThoughtsScreen onNavigate={setScreen} />}
      {screen === "emotions" && <EmotionsScreen onNavigate={setScreen} />}
    </>
  );
}

export default App;
