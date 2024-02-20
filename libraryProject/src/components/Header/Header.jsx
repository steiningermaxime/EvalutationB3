import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {


    return (
        <header>
            <nav>
                <ul>
                    <li >
                        <Link to="/">Accueil</Link>
                    </li>
                    <li >
                        <Link to="/add">Ajouter</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
