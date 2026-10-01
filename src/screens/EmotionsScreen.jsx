import { useState, useEffect } from "react";
import "./EmotionsScreen.css";
import HomeButton from "../components/HomeButton.jsx";
import { Cloud } from "../components/Cloud.jsx";
import { positionObject } from "../utils/positionObject.js";
import { useTypewriter } from "../hooks/useTypewriter.js";
import { SparkleEffect } from "../components/SparkleEffect.jsx";
import { load, save, KEYS } from "../utils/storage.js";

const PARTICLE_COLOR = "rgba(255, 255, 255, 0.35)";

const INPUT_EMOJIS = [
  "(≧◡≦)",
  "(*＾▽＾)／",
  "(≧ω≦)",
  "(=^･ω･^=)",
  "(* ´ ▽ ` *)",
];

const MAX_EMOTIONS = 18;

const DEFAULT_EMOTIONS = [
  "Happy",
  "Lonely",
  "Calm",
  "Ashamed",
  "Proud",
  "Anxious",
  "Hopeful",
  "Angry",
  "Loved",
  "Sad",
  "Excited",
  "Guilty",
].map((text) => ({
  id: crypto.randomUUID(),
  text,
}));

const CLOUD_TOP_SPACING = 0;
const CLOUD_LEFT_SPACING = 15;
const CLOUD_GAP = 25;

const EMOTION_TOP_SPACING = 5;
const EMOTION_GAP = 15;

const PER_COLUMN = 6;
const COLUMN_WIDTH = 40;

function EmotionsScreen({ onNavigate, thoughts, setThoughts, onRemove }) {
  const [emotions, setEmotions] = useState(() =>
    load(KEYS.emotions, DEFAULT_EMOTIONS),
  );

  useEffect(() => {
    save(KEYS.emotions, emotions);
  }, [emotions]);

  const typedEmojis = useTypewriter(INPUT_EMOJIS, 200);

  const [input, setInput] = useState("");

  const cleanValue = input.trim();

  const alreadyThere = emotions.some(
    (emotion) => emotion.text.toLowerCase() === cleanValue.toLowerCase(),
  );

  function addEmotion() {
    if (cleanValue === "" || alreadyThere || emotions.length >= MAX_EMOTIONS)
      return;
    const newEmotion = { id: crypto.randomUUID(), text: cleanValue };
    setEmotions((prev) => [...prev, newEmotion]);

    setInput("");
  }

  return (
    <div className="emotions-screen">
      <div className="input-panel">
        <div className="input-group">
          <input
            name="emotions"
            type="text"
            className="emotions-input"
            maxLength="15"
            autoComplete="off"
            placeholder={typedEmojis}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addEmotion()}
          />
          <SparkleEffect color={PARTICLE_COLOR}>
            <button className="add-button" onClick={addEmotion}>
              +
            </button>
          </SparkleEffect>
        </div>
        <div className="emotion-list">
          {emotions.map((emotion, emotionCounter) => {
            const column = Math.floor(emotionCounter / PER_COLUMN);
            const rowInColumn = emotionCounter % PER_COLUMN;
            const EMOTION_LEFT_SPACING = column * COLUMN_WIDTH;
            const position = positionObject(
              rowInColumn,
              EMOTION_TOP_SPACING,
              EMOTION_LEFT_SPACING,
              EMOTION_GAP,
            );
            return (
              <div
                key={emotion.id}
                className="emotion-box pulse"
                style={position}
              >
                <span className="emotion-text">{emotion.text}</span>
                <button
                  className="emotion-remove"
                  onClick={() => alert("work in progress")}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="drop-panel">
        <HomeButton onClick={() => onNavigate("home")} />
        <div className="drop-zone">
          <span className="drop-text">drop cloud here</span>
        </div>
        <button className="confirm-button">Release</button>
      </div>
      <ul className="cloud-field">
        {thoughts.slice(0, 4).map((thought, cloudNumber) => {
          const position = positionObject(
            cloudNumber,
            CLOUD_TOP_SPACING,
            CLOUD_LEFT_SPACING,
            CLOUD_GAP,
          );
          return (
            <Cloud
              key={thought.id}
              text={thought.text}
              onRemove={() => onRemove(thought.id, setThoughts)}
              position={position}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default EmotionsScreen;

/* thoughtsscreen -> PSYCHE should be on it's own, use gap to all is bad... input row + cloudlist same gap to PSYCHE */
/* --> Same for emotionsscreen IDEA!!! --> Nav bar or something like that later... so... better  seperate them */
/* release button is hidden -> with state in jsx */
/* add cloudlist with postion math */
