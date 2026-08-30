import { useState, useEffect } from "react";

export function useTypewriter(text, time) {
  const [writing, setWriting] = useState("");

  useEffect(() => {
    // picks one of several placeholder texts at random
    const fullText = text[Math.floor(Math.random() * text.length)];
    let letters = 0;

    const typing = setInterval(() => {
      let placeholder = fullText.slice(0, letters);
      setWriting(placeholder);
      letters++;

      if (letters > fullText.length) {
        clearInterval(typing);
      }
    }, time);

    return () => clearInterval(typing);
  }, []);
  return writing;
}
