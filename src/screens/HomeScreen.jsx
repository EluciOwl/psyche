import "./HomeScreen.css";
import homeImg from "../assets/images/home-wordmark.png";

function HomeScreen() {
  return (
    <div className="home-screen">
      <button id="home-button">
        <img src={homeImg} alt="Psyche" />
      </button>

      <div className="selection-menu">
        <button id="thoughts-button" className="menu-button">
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
