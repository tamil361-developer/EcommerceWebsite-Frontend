import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow((prev) => !prev);
  const handleNavClick = () => setShow(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top custom-navbar border-bottom shadow-sm">
      <div className="container p-2">
        <Link className="navbar-brand fw-bold" to="/" onClick={handleNavClick}>
          Tkart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={show}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse${show ? " show" : ""}`}
          id="navbarNav"
        >
          <div className="mx-auto w-50 d-none d-lg-block">
            <form className="d-flex" /* role="search" */>
              <input
                className="form-control me-2 rounded-pill"
                type="search"
                placeholder="Search for products, brands and more"
                aria-label="Search"
                style={{ minWidth: "250px" }}
              />
              <button
                className="btn btn-outline-primary rounded-pill px-3"
                type="submit"
              >
                <span className="bi bi-search" aria-hidden="true"></span> Search
              </button>
            </form>
          </div>
          <ul className="navbar-nav ms-auto fw-bold ">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavClick}>
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="nav-link"
                to="/categories"
                onClick={handleNavClick}
              >
                Categories
              </Link>
            </li> */}
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/cart" onClick={handleNavClick}>
                Cart
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={handleNavClick}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
