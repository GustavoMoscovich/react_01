import React from "react";
import "./NavBar.css";
import Cart from "../Cart/Cart";


const NavBar = () => {
    return (
        <nav className="Navigation">
        <ul className="List-ul">
            <li className="NavLink">
                <a href="https://www.pokemon.com/es"> Principal </a>
            </li>
            <li className="NavLink">
                <a href="https://www.pokemon.com/es"> Contacto </a>
            </li>
            <li className="NavLink">
                <a href="https://www.pokemon.com/es"> Acerca de.. </a>
            </li>
            <li> <Cart /> </li>
        </ul>

        </nav>

    );
};

export default NavBar;