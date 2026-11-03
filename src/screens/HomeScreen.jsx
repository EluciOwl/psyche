import "./HomeScreen.css";

function HomeScreen({ onNavigate }) {
  return (
    <div className="home-screen">
      <span className="logo">Psyche</span>

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
