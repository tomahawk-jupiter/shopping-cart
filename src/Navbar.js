import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <div>
      <header>
        <div className="logo">The Armoury</div>
        <nav className="navbar">
          <Link className="nav-link" to="/home">Home</Link>
          <Link className="nav-link" to="/shop">Shop</Link>
          <Link className="nav-link" to="/cart">Cart</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Navbar;