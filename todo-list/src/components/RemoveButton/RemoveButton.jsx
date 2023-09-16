import "./RemoveButton.css";
import { default as removeIcon } from "../../assets/icons/remove_icon.svg";

const RemoveButton = ({ id, onRemove }) => (
  <button onClick={(_) => onRemove(_, id)}>
    <img src={removeIcon} alt="RemoveIcon" />
  </button>
);

export default RemoveButton;
