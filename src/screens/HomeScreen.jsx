import "./HomeScreen.css";
import HomeButton from "../components/HomeButton";

function HomeScreen({ onNavigate }) {
  return (
    <div className="home-screen">
      <HomeButton onClick={() => onNavigate("home")} />
      <div className="selection-menu">
        <button
          id="thoughts-button"
          className="menu-button"
          onClick={() => onNavigate("thoughts")}
        >
          Thoughts
        </button>

        <button
          id="emotions-button"
          className="menu-button"
          onClick={() => onNavigate("emotions")}
        >
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
