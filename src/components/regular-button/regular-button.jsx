import "./regular-button.styles.scss";
import { BUTTON_TYPE_CLASSES } from "../../constants/constants.jsx";

function RegularButton({ children, buttonType, ...inputProps }) {
  return (
    <div>
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...inputProps}
      >
        {children}
      </button>
    </div>
  );
}

export default RegularButton;
