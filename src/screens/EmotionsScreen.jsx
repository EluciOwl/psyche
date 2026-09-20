import "./EmotionsScreen.css";
import HomeButton from "../components/HomeButton.jsx";
import { CloudField } from "../components/Cloud.jsx";

function EmotionsScreen({ onNavigate, thoughts, onRemove }) {
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
      <CloudField thoughts={thoughts} onRemove={onRemove} />
    </div>
  );
}
export default EmotionsScreen;

/* thoughtsscreen -> PSYCHE should be on it's own, use gap to all is bad... input row + cloudlist same gap to PSYCHE */
/* --> Same for emotionsscreen IDEA!!! --> Nav bar or something like that later... so... better  seperate them */
/* release button is hidden -> with state in jsx */
/* add cloudlist with postion math */
