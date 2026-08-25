import { useState } from "react";
import "./ThoughtsScreen.css";
import "../components/Cloud.css";
import homeImg from "../assets/images/home-button.png";
import cloudImg from "../assets/images/cloud.png";


function ThoughtsScreen({ onNavigate }) {
  const [input, setInput] = useState("");
  const [thoughts, setThoughts] = useState([]);

  function addThought() {
    if (input.trim() === "") return;
    setThoughts([...thoughts, input]);
    setInput("");
  }

  return (
    <div className="thoughts-screen">
      <button id="home-button" onClick={() => onNavigate("home")}>
        <img src={homeImg} alt="Thoughts" />
      </button>

      <div id="thoughts-input-row">
        <p id="thought-counter">0/0</p>

        <input
          type="text"
          id="thought-input"
          placeholder="What's on your mind?"
          spellCheck={false}
          maxLength={190}
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addThought()}
        />

        <button id="add-thought-button" onClick={addThought}>
          +
        </button>
      </div>

      <ul id="cloud-field">
        {thoughts.map((thought) => (
          <li className="cloud float" key={thought}>
            <img src={cloudImg} alt="" />
            <span className="cloud-text">{thought}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ThoughtsScreen;
