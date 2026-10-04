import { useState, useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import ThoughtsScreen from "./screens/ThoughtsScreen";
import EmotionsScreen from "./screens/EmotionsScreen";
import "./App.css";
import { load, save, KEYS } from "./utils/storage.js";
import { remove } from "./utils/removeById.js";
import Background from "./components/Background.jsx";

function App() {
  const [screen, setScreen] = useState("home");
  const [thoughts, setThoughts] = useState(() => load(KEYS.thoughts, []));

  useEffect(() => {
    save(KEYS.thoughts, thoughts);
  }, [thoughts]);

  return (
    <>
      <Background theme={screen === "home" ? "teal" : "violet"} />
      {screen === "home" && <HomeScreen onNavigate={setScreen} />}
      {screen === "thoughts" && (
        <ThoughtsScreen
          onNavigate={setScreen}
          thoughts={thoughts}
          setThoughts={setThoughts}
          onRemove={remove}
        />
      )}
      {screen === "emotions" && (
        <EmotionsScreen
          onNavigate={setScreen}
          thoughts={thoughts}
          onRemove={remove}
          setThoughts={setThoughts}
        />
      )}
    </>
  );
}

export default App;
