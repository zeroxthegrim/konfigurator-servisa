import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <img
                src="https://www.akcijeikatalozi.hr/media/prodavac/tokic_logo.png"
                alt="logo"
            />
            <div className="header__text">
                <h1>Konfigurator servisa</h1>
                <p>Izračunajte trošak servisa</p>
            </div>
        </div>
    )
}

export default Header
