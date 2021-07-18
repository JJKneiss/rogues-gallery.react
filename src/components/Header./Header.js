import React from 'react';
import Nav from '../Nav/Nav';
import { NavLink } from 'react-router-dom';

/* JK: Basic Header */
const Header = props => {
    return (
        <header>
            <ul>
                <li>
                    <NavLink to="/Home"><h1>Rogue's Gallery</h1></NavLink>
                    <p>Adventure is a Tavern Away</p>
                </li>
                <li>
                    <Nav />
                </li>
            </ul>
        </header >

    );
}

export default Header;