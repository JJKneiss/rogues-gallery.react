import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
/* JK: Basic Nav */
const Nav = props => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li class="dropdown">
                    <button class="dropbtn">Tools <FaChevronDown /></button>
                    <div class="dropdown-content">
                        <NavLink to="/CreateChar">Create Character</NavLink>
                        <NavLink to="Dice">Dice Roll</NavLink>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;