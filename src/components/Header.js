import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
     <div className="header">
        <h1>React movies</h1>
        <nav>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} >
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/favourites" className={(nav) => (nav.isActive ? "nav-active" : "")} >
                    <li>Coup de coeur</li>
                </NavLink>
            </ul>
        </nav>
     </div>
    );
};

export default Header;