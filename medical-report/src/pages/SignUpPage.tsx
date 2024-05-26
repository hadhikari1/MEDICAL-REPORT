import { Link } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import HeaderComponent from "../components/HeaderComponent";
import "../css/SignUpPage.css";
import InputComponent from "../components/InputComponent";

export default function SignUpPage() {
  return (
    <>
      <HeaderComponent />
      <div className="sign-up-page">
        <h4 className="signup-heading">Signup</h4>
        <div className="signUp-Form">
          <InputComponent
            name="firstName"
            placeholder="First Name"
            className="first-name-input"
          />
          <InputComponent
            name="lastName"
            placeholder="Last Name"
            className="last-name-input"
          />

          <InputComponent
            name="lastName"
            type="email"
            placeholder="Email"
            className="email-input"
          />

          <InputComponent
            type="password"
            name="password"
            placeholder="Password"
            className="password-input"
          />

          <InputComponent
            type="password"
            name="password"
            placeholder="Confirm Password"
            className="confirm-password-input"
          />

          <ButtonComponent
            className={"signup-page-btn"}
            onClick={undefined}
            title={"Sign Up"}
          />
        </div>
        <div className="signup-link">
          Already have an account? <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </>
  );
}
