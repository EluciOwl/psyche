import "./Background.css";
import { useState, useEffect } from "react";
import { Stars } from "./Stars";

function Background({ theme }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouse(event) {
      console.log(
        event.clientX / window.innerWidth - 0.5,
        event.clientY / window.innerHeight - 0.5,
      );
      setPosition({
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      });
    }

    window.addEventListener("mousemove", handleMouse);

    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

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
