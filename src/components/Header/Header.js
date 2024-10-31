import React from 'react';
import logo from './favicon2.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <div className="header-title">
                <h1>TEXAS STATE UNIVERISTY</h1>
            </div>
            <div className="header-under"></div>

            <div className="logoLine">
                <img className="icon" src={logo} alt="Logo" /> 
                <div className="catch">.catch</div>
                <div className="littleLine">|</div>
                <div className="SLAC">STUDENT LEARNING ASSISTANCE CENTER</div>
            </div>
            <div className="header-line"></div>
            <div className="vert-line"></div>
        </header>
    );
};

export default Header;
