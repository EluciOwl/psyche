import { useState, useEffect } from "react";
import "./ThoughtsScreen.css";
import HomeButton from "../components/HomeButton.jsx";
import { useTypewriter } from "../hooks/useTypewriter.js";
import { SparkleEffect } from "../components/SparkleEffect.jsx";
import { loadThoughts, saveThoughts } from "../utils/thoughtStorage.js";
import { CloudField } from "../components/Cloud.jsx";

const MAX_THOUGHTS = 8;

function ThoughtsScreen({ onNavigate }) {
  const typedText = useTypewriter(["What's on your mind?"], 150);

  const [input, setInput] = useState("");
  const [thoughts, setThoughts] = useState(() => loadThoughts());

  useEffect(() => {
    saveThoughts(thoughts);
  }, [thoughts]);

  function removeCloud(idToRemove) {
    setThoughts((prev) => prev.filter((thought) => thought.id !== idToRemove));
  }

  function addThought() {
    if (input.trim() === "" || thoughts.length >= MAX_THOUGHTS) return;
    const newThought = { id: crypto.randomUUID(), text: input };
    setThoughts((prev) => [...prev, newThought]);

    setInput("");
  }

  return (
    <div className="thoughts-screen">
      <HomeButton onClick={() => onNavigate("home")} />

      <div id="thoughts-input-row">
        <p
          id="thought-counter"
          className={thoughts.length >= MAX_THOUGHTS ? "wobble" : ""}
        >
          {thoughts.length}/{MAX_THOUGHTS}
        </p>
        <input
          type="text"
          id="thought-input"
          placeholder={typedText}
          spellCheck={false}
          maxLength={190}
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addThought()}
        />
        <SparkleEffect>
          <button id="add-thought-button" onClick={addThought}>
            +
          </button>
        </SparkleEffect>
      </div>

      <CloudField thoughts={thoughts} onRemove={removeCloud} />
    </div>
  );
}
export default ThoughtsScreen;
