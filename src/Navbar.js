import { Outlet, Link } from "react-router-dom";
// import { useState } from "react/cjs/react.production.min";
import React, { useState } from "react";

const Navbar = (props) => {
  const [dropNav, setDropNav] = useState(false);
  return (
    <div>
      <header>
        <div className="logo">Odin's Forge</div>
        <nav
          className={`navbar ${!dropNav ? "" : "drop-nav-show"}`}
          onClick={() => setDropNav(false)}
        >
          <Link className="nav-link" to="/home">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/cart">
            CART {props.totalItems}
          </Link>
        </nav>
        <div className="hamburger-icon" onClick={() => setDropNav(!dropNav)}>
          &equiv;
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Navbar;
