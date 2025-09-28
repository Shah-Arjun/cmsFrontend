import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ps-4 pe-4">
      <div className="container-fluid">
        {/* Brand on the left */}
        <NavLink className="navbar-brand fw-bolder" to="/">
          CMS
        </NavLink>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Center Menu */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item ms-4">
              <NavLink
                to="/"
                end
                className={({isActive}) =>
                  `nav-link fw-bold ${isActive ? "active fw-bold text-primary" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item ms-4">
              <NavLink
                to="/about"
                className={({isActive}) =>
                  `nav-link fw-bold ${isActive ? "active fw-bold text-primary" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item ms-4">
              <NavLink
                to="/contact"
                className={({isActive}) =>
                  `nav-link fw-bold ${isActive ? "active fw-bold text-primary" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Search Bar */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
