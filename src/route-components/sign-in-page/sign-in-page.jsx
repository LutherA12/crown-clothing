import "./sign-in-page.styles.scss";
import { SignUpForm, SignInForm } from "../../components/exports";

function SignInPage() {
  return (
    <div className="sign-in-page-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default SignInPage;
