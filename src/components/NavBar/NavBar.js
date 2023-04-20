import "./NavBar.css";
import CartIcon from "../CartIcon/CartIcon";
import BrandMenu from "../BrandMenu/BrandMenu"

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <Link className="Link" to="/">
          Home
        </Link>
        <BrandMenu />
        <Link className="Link" to="/Contact">
          Contacto
        </Link>
        <Link className="Link" to="/About">
          Acerca de Nosotros
        </Link>
        <CartIcon />
      </ul>
    </nav>
  );
};

export default NavBar;

