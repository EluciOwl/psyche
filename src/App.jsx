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
  const theme = screen === "home" ? "teal" : "violet";

  useEffect(() => {
    save(KEYS.thoughts, thoughts);
  }, [thoughts]);

  return (
    <>
      <div className={theme}>
        <Background />
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
      </div>
    </>
  );
}

export default App;
