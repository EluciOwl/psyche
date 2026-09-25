import { useState } from "react";
import "./ThoughtsScreen.css";
import HomeButton from "../components/HomeButton.jsx";
import { useTypewriter } from "../hooks/useTypewriter.js";
import { SparkleEffect } from "../components/SparkleEffect.jsx";
import { CloudField } from "../components/Cloud.jsx";

const MAX_THOUGHTS = 8;
const PARTICLE_COLOR = "rgb(204, 73, 255)";

function ThoughtsScreen({ onNavigate, thoughts, setThoughts, onRemove }) {
  const typedText = useTypewriter(["What's on your mind?"], 150);
  const [input, setInput] = useState("");

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
        <SparkleEffect color={PARTICLE_COLOR}>
          <button id="add-thought-button" onClick={addThought}>
            +
          </button>
        </SparkleEffect>
      </div>
      <CloudField thoughts={thoughts} onRemove={onRemove} />
    </div>
  );
}
export default ThoughtsScreen;
