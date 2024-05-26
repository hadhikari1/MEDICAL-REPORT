import React from 'react';
import '../css/HeaderComponent.css';
import ButtonComponent from './ButtonComponent';
import { Link, useNavigate } from 'react-router-dom';

export default function HeaderComponent() {
    const navigate = useNavigate();

    const routeToLoginPage = () => {
        navigate("/login");
    }

    return (
        <header className="header">
            <Link  className="logo-container" to={'/'}>
                <img src="/medical-record.png" alt="logo" className="logo" />
                <h1>Medi File</h1>
            </Link>
            <div className="signin-container">
                <ButtonComponent title="Sign In" className="signin-button" onClick={routeToLoginPage}  />
            </div>
        </header>
    );
}