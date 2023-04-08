import "./NavBar.css";
import Cart from "../Cart/Cart";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <Link className="Link" to="/*">
          Home
        </Link>
        <Link className="Link" to="/Colmi">
          Colmi
        </Link>
        <Link className="Link" to="/Garmin">
          Garmin
        </Link>
        <Link className="Link" to="/Samsung">
          Samsung
        </Link>
        <Link className="Link" to="/Xiaomi">
          Xiaomi
        </Link>
        <li> <Cart /> </li>
      </ul>
    </nav>
  );
};

export default NavBar;

