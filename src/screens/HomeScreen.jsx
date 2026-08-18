import "./HomeScreen.css";
import heroImg from "../assets/images/home-hero.png";

function HomeScreen({ onNavigate }) {
  return (
    <div className="home-screen">
      <button id="home-hero">
        <img src={heroImg} alt="Psyche" />
      </button>

      <div className="selection-menu">
        <button
          id="thoughts-button"
          className="menu-button"
          onClick={() => onNavigate("thoughts")}
        >
          Thoughts
        </button>

        <button id="emotions-button" className="menu-button">
          Emotions
        </button>

        <button id="analyze-button" className="menu-button">
          Analyze
        </button>
      </div>
    </div>
  );
}

export default HomeScreen;
