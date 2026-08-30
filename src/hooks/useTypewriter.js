import { useState, useEffect } from "react";

export function useTypewriter(text, time) {
  const [writing, setWriting] = useState("");

  const fullText = text[Math.floor(Math.random() * text.length)];
  let letters = 0;

  useEffect(() => {
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
