import "./Background.css";

function Background({ theme }) {
  return (
    <div className={`background ${theme}`}>
      <div className="sky" />
      <div className="glow" />
      <div className="ground" />
      <div className="grid" />
      <div className="reflection" />
      <div className="horizon" />
    </div>
  );
}

export default Background;
