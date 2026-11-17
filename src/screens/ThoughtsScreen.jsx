import { useState } from "react";
import "./ThoughtsScreen.css";
import HomeButton from "../components/HomeButton.jsx";
import { useTypewriter } from "../hooks/useTypewriter.js";
import { SparkleEffect } from "../components/SparkleEffect.jsx";
import { CardField } from "../components/Card.jsx";

const MAX_THOUGHTS = 8;
const PARTICLE_COLOR = "rgb(204, 73, 255)";

function ThoughtsScreen({ onNavigate, thoughts, setThoughts, onRemove }) {
  const typedText = useTypewriter(["What's on your mind?"], 150);
  const [input, setInput] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  function addThought() {
    if (input.trim() === "" || thoughts.length >= MAX_THOUGHTS) return;
    const newThought = { id: crypto.randomUUID(), text: input };
    setThoughts((prev) => [...prev, newThought]);

    setInput("");
  }

  return (
    <div className="thoughts-screen">
      <HomeButton onClick={() => onNavigate("home")} />

      <div className="thoughts-input-row">
        <div
          className="bubble"
          style={{ "--fill": `${(thoughts.length / MAX_THOUGHTS) * 100}%` }}
        >
          <div className="bubble-ring"></div>
          <div className={isHovering ? "bubble-ring ring-piece" : ""}></div>
          <p
            className={`thought-counter ${thoughts.length >= MAX_THOUGHTS ? "wobble" : ""}`}
          >
            {thoughts.length}
          </p>
        </div>
        <div className="input-frame">
          <textarea
            className="thought-input"
            placeholder={typedText}
            spellCheck={false}
            maxLength={190}
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <SparkleEffect color={PARTICLE_COLOR}>
            <button
              className="add-thought-button"
              onClick={addThought}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              +
            </button>
          </SparkleEffect>
        </div>
      </div>
      <CardField
        thoughts={thoughts}
        setThoughts={setThoughts}
        onRemove={onRemove}
      />
    </div>
  );
}
export default ThoughtsScreen;
