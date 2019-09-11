import React from 'react';

import './Header.css'
import logo from '../../assets/logo.png'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="user-section">
                <span>Meu perfil</span>
                <span className="icon">X</span>
            </div>
        </header>
    )
}