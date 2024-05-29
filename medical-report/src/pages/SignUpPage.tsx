import { Link } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import HeaderComponent from "../components/HeaderComponent";
import "../css/SignUpPage.css";
import InputComponent from "../components/InputComponent";
import React, { useState } from "react";
import Errors from "../interface/Error";
import UserInfo from "../interface/UserInfo";


export default function SignUpPage() {
  const [signUpInput, setSignUpInput] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setErrors] = useState<Errors>({});

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

    setSignUpInput({
      ...signUpInput,
      [key]: value,
    });
  };


  // const hasError = hasNonEmptyMessage(error);

  const saveUserInfo = () => {
    localStorage.setItem("userInfo", JSON.stringify(signUpInput) )
  }

  // console.log(signUpInput, "signupinput")

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "First Name")
            }
            value={signUpInput.firstName}
            errors={error}
          />
          <InputComponent
            name="lastName"
            placeholder="Last Name"
            className="last-name-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "Last Name")
            }
            value={signUpInput.lastName}
            errors={error}
          />

          <InputComponent
            name="email"
            type="email"
            placeholder="Email"
            className="email-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "Email")
            }
            value={signUpInput.email}
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
            value={signUpInput.password}
            errors={error}
          />

          <InputComponent
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="confirm-password-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "Confirm Password")
            }
            value={signUpInput.confirmPassword}
            errors={error}
          />

          <ButtonComponent
            className={"signup-page-btn"}
            onClick={saveUserInfo}
            title={"Sign Up"}
            error={error}
          />
        </div>
        <div className="signup-link">
          Already have an account? <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </>
  );
}
