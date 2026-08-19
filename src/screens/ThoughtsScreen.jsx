import "./ThoughtsScreen.css";
import homeImg from "../assets/images/home-button.png";

function ThoughtsScreen({ onNavigate }) {
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
          spellcheck="false"
          maxlength="190"
          autocomplete="off"
        />

        <button id="add-thought-button">+</button>
      </div>
    </div>
  );
}
export default ThoughtsScreen;
