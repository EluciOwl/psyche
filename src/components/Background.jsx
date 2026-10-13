import { useEffect } from "react";
import "./Background.css";

const MAX_STARS = 50;

function Background({ theme }) {
  const stars = Array.from({ length: 50 }, () => ({
    id: crypto.randomUUID(),
    animationDelay: Math.random() * -6 + "s",
    top: 70 * Math.random() + "%",
    left: 100 * Math.random() + "%",
  }));

  return (
    <div className={`background ${theme}`}>
      <div className="sky" />
      {stars.map((star) => {
        return (
          <div
            className="star twinkle"
            key={star.id}
            style={{
              animationDelay: star.animationDelay,
              top: star.top,
              left: star.left,
            }}
          ></div>
        );
      })}
      ;
      <div className="ground" />
      <div className="grid" />
      <div className="reflection" />
      <div className="horizon" />
    </div>
  );
}

export default Background;
