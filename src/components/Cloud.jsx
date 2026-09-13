import "./Cloud.css";
import cloudImg from "../assets/images/cloud.png";

function Cloud() {
  return (
    <ul id="cloud-field">
      {thoughts.map((thought) => (
        <li className="cloud float" key={thought.id}>
          <img src={cloudImg} alt="" />
          <span
            className="cloud-text"
            style={{ fontSize: `${getCloudFontSize(thought.text)}cqw` }}
          >
            {thought.text}
          </span>
          <button
            className="cloud-remove"
            onClick={() => removeCloud(thought.id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Cloud;
