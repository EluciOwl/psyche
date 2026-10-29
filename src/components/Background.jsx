import "./Background.css";
import { Stars } from "./Stars";

function Background({ theme }) {
  return (
    <div className={`background ${theme}`}>
      <div className="sky" />
      <div className="parallax">
        <Stars />
      </div>
      <div className="parallax">
        <div className="ground" />
        <div className="grid" />
        <div className="reflection" />
        <div className="horizon" />
      </div>
    </div>
  );
}

export default Background;
