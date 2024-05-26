import React from "react";
import "../css/HomeComponent.css";
import HeaderComponent from "../components/HeaderComponent";

export default function HomePage() {
  return (
    <div>
        <HeaderComponent />
      <div className="home">
        <div className="home-content">
          <h1>Medi File</h1>
          <p>
            Store your medical records securely and access them anytime,
            anywhere.
          </p>
        </div>
      </div>
    </div>
  );
}
