import { useState } from "react";
import "./EmotionsScreen.css";
import HomeButton from "../components/HomeButton.jsx";
import { Cloud } from "../components/Cloud.jsx";
import { positionObject } from "../utils/positionObject.js";
import { useTypewriter } from "../hooks/useTypewriter.js";
import { SparkleEffect } from "../components/SparkleEffect.jsx";

const PARTICLE_COLOR = "rgba(255, 255, 255, 0.35)";

const INPUT_EMOJIS = [
  "(≧◡≦)",
  "(*＾▽＾)／",
  "(≧ω≦)",
  "(=^･ω･^=)",
  "(* ´ ▽ ` *)",
];

const MAX_EMOTIONS = 12;

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
];

const CLOUD_TOP_SPACING = 0;
const CLOUD_LEFT_SPACING = 15;
const CLOUD_GAP = 25;

const EMOTION_TOP_SPACING = 5;
const EMOTION_GAP = 15;

const PER_COLUMN = 6;
const COLUMN_WIDTH = 40;

function EmotionsScreen({ onNavigate, thoughts, onRemove }) {
  const [emotions, setEmotions] = useState(DEFAULT_EMOTIONS);
  const typedEmojis = useTypewriter(INPUT_EMOJIS, 200);

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
          />
          <SparkleEffect color={PARTICLE_COLOR}>
            <button className="add-button">+</button>
          </SparkleEffect>
        </div>
        <div className="emotion-list">
          {emotions.slice(0, MAX_EMOTIONS).map((emotion, emotionCounter) => {
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
              <div key={emotion} className="emotion-box pulse" style={position}>
                <span className="emotion-text">{emotion}</span>
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
              onRemove={() => onRemove(thought.id)}
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
