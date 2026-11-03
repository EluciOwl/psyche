import "./Background.css";
import { useState, useEffect } from "react";
import { Stars } from "./Stars";

const STAR_DEPTH = 12;
const FLOOR_DEPTH = 4;

function Background({ theme }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(event) {
      setPosition({
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    function handleLeave() {
      setPosition({
        x: 0,
        y: 0,
      });
    }

    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () =>
      document.documentElement.removeEventListener("mouseleave", handleLeave);
  }, []);

  return (
    <div className="background">
      <div className="sky" />
      <div
        className="parallax"
        style={{
          transform: `translate(${position.x * STAR_DEPTH}px, ${position.y * STAR_DEPTH}px)`,
        }}
      >
        <Stars />
      </div>
      <div
        className="parallax"
        style={{
          transform: `translate(${position.x * FLOOR_DEPTH}px, ${position.y * FLOOR_DEPTH}px)`,
        }}
      >
        <div className="ground" />
        <div className="grid" />
        <div className="reflection" />
        <div className="horizon" />
      </div>
    </div>
  );
}

export default Background;
