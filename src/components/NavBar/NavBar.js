import React from "react";
import "./NavBar.css";
import Cart from "../Cart/Cart";


const NavBar = () => {
    return (
        <nav className="Navigation">
        <ul className="List-ul">
            <li className="NavLink">Principal</li>
            <li className="NavLink">Contacto</li>
            <li className="NavLink">Acerca de..</li>
            <li> <Cart /> </li>

        </ul>

        </nav>

    );
};

export default NavBar;