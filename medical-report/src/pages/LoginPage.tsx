import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import "../css/LoginPage.css";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";

export default function LoginPage() {
  return (
    <>
      <HeaderComponent />
      <div className="loginPage">
        <h4>Login</h4>
        <div className="loginForm">
          <InputComponent
            name="username"
            placeholder="Username"
            className="username-input"
          />
          <InputComponent
            type="password"
            name="password"
            placeholder="Password"
            className="password-input"
          />
          <ButtonComponent
            className={"login-page-btn"}
            onClick={undefined}
            title={"Login"}
          />
        </div>
        <div className="signup-link">
          Don't have an account? <Link to={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </>
  );
}
