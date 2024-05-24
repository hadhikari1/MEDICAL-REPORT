import React from 'react';
import '../css/HeaderComponent.css';
import ButtonComponent from './ButtonComponent';

export default function HeaderComponent() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src="/medical-record.png" alt="logo" className="logo" />
                <h1>Medi File</h1>
            </div>
            <div className="signin-container">
                <ButtonComponent title="Sign In" className="signin-button" />
            </div>
        </header>
    );
}