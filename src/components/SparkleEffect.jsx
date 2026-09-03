import { useState, useRef } from "react";
import "./Particle.css";

export function SparkleEffect({ children }) {
  const [particles, setParticles] = useState([]);
  const sparkleRef = useRef(null);

  const startSparkle = () => {
    sparkleRef.current = setInterval(() => {
      const PARTICLE_LEFT = Math.random() * 100 + "%";
      const PARTICLE_BOTTOM = "0px";
      const PARTICLE_COLOR = "rgb(204, 73, 255)";

      const newParticle = {
        id: crypto.randomUUID(),
        left: PARTICLE_LEFT,
        bottom: PARTICLE_BOTTOM,
        color: PARTICLE_COLOR,
      };

      setParticles((prev) => [...prev, newParticle]);
      setTimeout(
        () =>
          setParticles((prev) =>
            prev.filter((particle) => particle.id !== newParticle.id),
          ),
        1000,
      );
    }, 50);
  };

  const stopSparkle = () => {
    clearInterval(sparkleRef.current);
  };

  return (
    <div
      className="sparkle-effect"
      onMouseEnter={startSparkle}
      onMouseLeave={stopSparkle}
    >
      {children}

      {particles.map((particle) => (
        <div
          className="particle"
          key={particle.id}
          style={{
            left: particle.left,
            bottom: particle.bottom,
            backgroundColor: particle.color,
          }}
        ></div>
      ))}
    </div>
  );
}
