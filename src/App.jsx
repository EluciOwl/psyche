import { useState, useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import ThoughtsScreen from "./screens/ThoughtsScreen";
import EmotionsScreen from "./screens/EmotionsScreen";
import "./App.css";
import { loadThoughts, saveThoughts } from "./utils/thoughtStorage.js";

function App() {
  const [screen, setScreen] = useState("home");
  const [thoughts, setThoughts] = useState(() => loadThoughts());

  useEffect(() => {
    saveThoughts(thoughts);
  }, [thoughts]);

  function removeCloud(idToRemove) {
    setThoughts((prev) => prev.filter((thought) => thought.id !== idToRemove));
  }

  return (
    <>
      {screen === "home" && <HomeScreen onNavigate={setScreen} />}
      {screen === "thoughts" && (
        <ThoughtsScreen
          onNavigate={setScreen}
          thoughts={thoughts}
          setThoughts={setThoughts}
          onRemove={removeCloud}
        />
      )}
      {screen === "emotions" && (
        <EmotionsScreen
          onNavigate={setScreen}
          thoughts={thoughts}
          onRemove={removeCloud}
        />
      )}
    </>
  );
}

export default App;
