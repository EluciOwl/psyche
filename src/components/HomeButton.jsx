import "./HomeButton.css";

function HomeButton({ onClick }) {
  return (
    <button className="home-button" onClick={onClick} aria-label="Back to home">
      Psyche
    </button>
  );
}

export default HomeButton;
