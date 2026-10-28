import { useState } from "react";

const MAX_STARS = 50;

export function Stars() {
  const [stars] = useState(() =>
    Array.from({ length: MAX_STARS }, () => ({
      id: crypto.randomUUID(),
      animationDelay: Math.random() * -6 + "s",
      top: 70 * Math.random() + "%",
      left: 100 * Math.random() + "%",
    })),
  );

  return stars.map((star) => {
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
  });
}
