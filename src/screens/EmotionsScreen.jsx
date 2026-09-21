import "./EmotionsScreen.css";
import HomeButton from "../components/HomeButton.jsx";
import { Cloud } from "../components/Cloud.jsx";
import { positionObject } from "../utils/positionObject.js";

function EmotionsScreen({ onNavigate, thoughts, onRemove }) {
  const CLOUD_TOP_SPACING = 0;
  const CLOUD_LEFT_SPACING = 15;
  const CLOUD_GAP = 25;

  return (
    <div className="emotions-screen">
      <div className="input-panel">
        <div className="input-group">
          <input
            type="text"
            className="emotions-input"
            maxLength="15"
            autoComplete="off"
          />
          <div className="sparkle-effect">
            <button className="add-button">+</button>
          </div>
        </div>
        <div className="emotion-list"></div>
      </div>
      <div className="drop-panel">
        <HomeButton onClick={() => onNavigate("home")} />
        <div className="drop-zone">
          <span className="drop-text">drop cloud here</span>
        </div>
        <button className="confirm-button">Release</button>
      </div>
      <ul className="cloud-field">
        {thoughts.map((thought, cloudNumber) => {
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
