import "./ThoughtsScreen.css";
import homeImg from "../assets/images/home-button.png";

function ThoughtsScreen({ onNavigate }) {
  return (
    <div className="thoughts-screen">
      <button id="home-button" onClick={() => onNavigate("home")}>
        <img src={homeImg} alt="Thoughts" />
      </button>
    </div>
  );
}

export default ThoughtsScreen;
