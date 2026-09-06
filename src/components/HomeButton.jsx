import "./HomeButton.css";
import homeImg from "../assets/images/home-button.png";

function HomeButton({ onClick }) {
  return (
    <button className="home-button" onClick={onClick}>
      <img src={homeImg} alt="Back to home" />
    </button>
  );
}

export default HomeButton;
