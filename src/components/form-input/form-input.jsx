import "./form-input.styles.scss";

function FormInput({ label, ...inputProps }) {
  return (
    <div className="group">
      <input className="form-input" {...inputProps} />
      <label
        className={`${
          inputProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
}

export default FormInput;
