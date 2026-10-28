import "./Background.css";
import { Stars } from "./Stars";

function Background({ theme }) {
  return (
    <div className={`background ${theme}`}>
      <div className="sky" />
      <Stars />
      <div className="ground" />
      <div className="grid" />
      <div className="reflection" />
      <div className="horizon" />
    </div>
  );
}

export default Background;
