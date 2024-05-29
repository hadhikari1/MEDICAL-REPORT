import { Link, useNavigate } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import "../css/LoginPage.css";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";
import { useEffect, useState } from "react";
import Errors from "../interface/Error";
import UserInfo from "../interface/UserInfo";

interface LoginInput {
  username: string;
  password: string;
}
export default function LoginPage() {
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState<LoginInput>({
    username: "",
    password: "",
  });
  const [error, setErrors] = useState<Errors>({});
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const checkLoggedIn = localStorage.getItem("loggedIn");
    if (checkLoggedIn){
      navigate("/");
      return;
    }
    const user = localStorage.getItem("userInfo") as string;
    console.log(user, "user");
    const parsedUser = JSON.parse(user);
    setUserInfo(parsedUser);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const key = e.target.name;
    const value = e.target.value;

    if (!value) {
      setErrors({ ...error, [key]: `${fieldName} is required` });
    } else {
      setErrors({ ...error, [key]: "" });
    }

    setLoginInput({
      ...loginInput,
      [key]: value,
    });
  };

  const matchUserInfo = () => {
    if (
      loginInput.username === userInfo.email &&
      loginInput.password === userInfo.email
    ) {
      localStorage.setItem("loggedIn", "true")
      navigate("/")
    }
  };

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "Username")
            }
            value={loginInput.username}
            errors={error}
          />
          <InputComponent
            type="password"
            name="password"
            placeholder="Password"
            className="password-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "Password")
            }
            value={loginInput.password}
            errors={error}
          />
          <ButtonComponent
            className={"login-page-btn"}
            onClick={matchUserInfo}
            title={"Login"}
            error={error}
          />
        </div>
        <div className="signup-link">
          Don't have an account? <Link to={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </>
  );
}
