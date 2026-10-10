import "./Background.css";

function Background({ theme }) {
  return (
    <div className={`background ${theme}`}>
      <div className="sky" />
      <div className="glow" />
      <div className="ground" />
      <div className="horizon" />
      <div className="reflection" />
    </div>
  );
}

export default Background;
