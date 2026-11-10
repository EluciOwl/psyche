import "./Card.css";

const CARD_FONT_MAX = 14;
const CARD_FONT_MIN = 5;
const CARD_SHRINK = 0.865;

function getCardFontSize(text) {
  const length = text.replace(/ +/g, " ").trim().length;
  return Math.max(
    CARD_FONT_MIN,
    CARD_FONT_MAX - Math.sqrt(length) * CARD_SHRINK,
  );
}

export function Card({ text, onRemove, position }) {
  return (
    <li className="card" style={position}>
      <span
        className="card-text"
        style={{ fontSize: `${getCardFontSize(text)}cqw` }}
      >
        {text}
      </span>
      <button className="card-remove" onClick={onRemove}>
        X
      </button>
    </li>
  );
}

export function CardField({ thoughts, setThoughts, onRemove }) {
  return (
    <ul className="card-field">
      {thoughts.map((thought) => (
        <Card
          key={thought.id}
          text={thought.text}
          onRemove={() => onRemove(thought.id, setThoughts)}
        />
      ))}
    </ul>
  );
}
