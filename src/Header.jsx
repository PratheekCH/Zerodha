import { Link } from "react-router-dom";
import "./Header.css";

function Header({ setsearchquery }) {
  let togglemode = () => {
    document.body.classList.toggle("change");
  };

  return (
    <header className="header">
      <img
        className="animate-bounce logo"
        src="https://zerodha.com/static/images/logo.svg"
        alt="logo"
      />

      <input
        className="search-input"
        onChange={(e) => {
          setsearchquery(e.target.value);
        }}
        type="text"
        placeholder="Search products..."
      />

      <nav className="nav-links">
        <Link to="/auth/register">Signup</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/auth/login">Signin</Link>

        <button className="theme-btn" onClick={togglemode}>
          Dark/Light
        </button>
      </nav>
    </header>
  );
}

export default Header;