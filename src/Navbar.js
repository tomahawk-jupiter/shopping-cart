import { Outlet, Link } from 'react-router-dom';

const Navbar = (props) => {
  return(
    <div>
      <header>
        <div className="logo">The Armoury</div>
        <nav className="navbar">
          <Link className="nav-link" to="/home">Home</Link>
          <Link className="nav-link" to="/shop">Shop</Link>
          <Link className="nav-link" to="/cart">Cart: {props.totalItems}</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Navbar;