import "./Cloud.css";
import cloudImg from "../assets/images/cloud.png";

const CLOUD_FONT_MAX = 14;
const CLOUD_FONT_MIN = 5;
const CLOUD_SHRINK = 0.865;

function getCloudFontSize(text) {
  const length = text.replace(/ +/g, " ").trim().length;
  return Math.max(
    CLOUD_FONT_MIN,
    CLOUD_FONT_MAX - Math.sqrt(length) * CLOUD_SHRINK,
  );
}

export function Cloud({ text, onRemove }) {
  return (
    <li className="cloud float">
      <img src={cloudImg} alt="" />
      <span
        className="cloud-text"
        style={{ fontSize: `${getCloudFontSize(text)}cqw` }}
      >
        {text}
      </span>
      <button className="cloud-remove" onClick={onRemove}>
        X
      </button>
    </li>
  );
}

export function CloudField({ thoughts, onRemove }) {
  return (
    <ul id="cloud-field">
      {thoughts.map((thought) => (
        <Cloud
          key={thought.id}
          text={thought.text}
          onRemove={() => onRemove(thought.id)}
        />
      ))}
    </ul>
  );
}
