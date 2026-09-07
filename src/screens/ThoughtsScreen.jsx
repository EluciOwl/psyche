import { useState, useEffect } from "react";
import "./ThoughtsScreen.css";
import "../components/Cloud.css";
import HomeButton from "../components/HomeButton.jsx";
import cloudImg from "../assets/images/cloud.png";
import { useTypewriter } from "../hooks/useTypewriter.js";
import { SparkleEffect } from "../components/SparkleEffect.jsx";
import { loadThoughts, saveThoughts } from "../utils/thoughtStorage.js";

const MAX_THOUGHTS = 8;

const CLOUD_FONT_MAX = 14;
const CLOUD_FONT_MIN = 5;
const CLOUD_SHRINK = 0.865;

function getCloudFontSize(text) {
  const length = text.replace(/ +/g, " ").trim().length;
  return Math.max(
    CLOUD_FONT_MIN,
    CLOUD_FONT_MAX - Math.sqrt(length) * CLOUD_SHRINK,
  );
}

function ThoughtsScreen({ onNavigate }) {
  const typedText = useTypewriter(["What's on your mind?"], 150);

  const [input, setInput] = useState("");
  const [thoughts, setThoughts] = useState(() => loadThoughts());

  useEffect(() => {
    saveThoughts(thoughts);
  }, [thoughts]);

  function addThought() {
    if (input.trim() === "" || thoughts.length >= MAX_THOUGHTS) return;
    const newThought = { id: crypto.randomUUID(), text: input };
    setThoughts([...thoughts, newThought]);

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

      <ul id="cloud-field">
        {thoughts.map((thought) => (
          <li className="cloud float" key={thought.id}>
            <img src={cloudImg} alt="" />
            <span
              className="cloud-text"
              style={{ fontSize: `${getCloudFontSize(thought.text)}cqw` }}
            >
              {thought.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ThoughtsScreen;
