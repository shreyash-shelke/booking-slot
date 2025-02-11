import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {

  const [isTogglerOpen, setTogglerOpen] = useState(false);

  const handleTogglerClick = () => {
    setTogglerOpen(!isTogglerOpen);
  };

  const handleNavLinkClick = () => {
    setTogglerOpen(false); // Close the toggler when a nav link is clicked
  };

  return (
    <>
      <header className="header-two position_top shadow-sm py-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-1">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              <img
                src="/assets/img/logo2.png"
                className="img-fluid"
                alt="logo"
              />
            </Link>
            <button
              className={`navbar-toggler ${isTogglerOpen ? '' : 'collapsed'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={isTogglerOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
              onClick={handleTogglerClick}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isTogglerOpen ? 'show' : ''}`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item fw-bold">
                  <NavLink className="nav-link fs-6" to="/" onClick={handleNavLinkClick}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-6" to="/about-us" onClick={handleNavLinkClick}>About Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-6" to="/services" onClick={handleNavLinkClick}>Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-6" to="/courts" onClick={handleNavLinkClick}>Courts</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-6" to="/contact-us" onClick={handleNavLinkClick}>Contact Us</NavLink>
                </li>
              </ul>
              <div className="btn-block mb-sm-1 mb-md-0">
                <div className="membership-btn two">
                  <Link to="/courts" style={{ 'zIndex': 'auto' }}><i className="far fa-user"></i> Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
