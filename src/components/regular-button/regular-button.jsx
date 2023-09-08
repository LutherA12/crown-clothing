import "./regular-button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

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
