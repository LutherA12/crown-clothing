import "./sign-in-form.styles.scss";
import { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils/firebase.utils";
import { FormInput, RegularButton } from "../exports";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
    createUserDocumentFromAuth(user);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert(`password does not match email ${error}`);
      } else if (error.code === "auth/user-not-found") {
        alert(`user email not found ${error}`);
      }
    }
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleFormChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password (six char min/case sensitive)"
          type="password"
          required
          onChange={handleFormChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <RegularButton type="submit">Sign In</RegularButton>
          <RegularButton
            type="button"
            className="google-sign-in-button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </RegularButton>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
