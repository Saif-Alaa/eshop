import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const MenuLink = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Shop", link: "/#shop" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Blogs", link: "/#blog" }
];

const dropdownItems = [
  { id: 1, name: "Trending Products", link: "/#trending" },
  { id: 2, name: "Best Selling", link: "/#best-selling" },
  { id: 3, name: "Top Rated", link: "/#top-rated" }
];


function navbar() {
      const [showSearch, setShowSearch] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  return (
   <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <a className="navbar-brand p-3 fs-2 text-danger fw-bold brand"  href="#">Ecommerce </a>
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

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {MenuLink.map((item) => (
            <li key={item.id} className="nav-item ms-2 fw-normal">
              <a className="nav-link" href={item.link}>{item.name}</a>
            </li>
          ))}
<li className="nav-item dropdown ms-1">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="navbarDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    {dropdownItems.map((item, index) => (
      <li key={item.id}>
        <a className="dropdown-item" href={item.link}>{item.name}</a>
      </li>
    ))}
    <li><hr className="dropdown-divider" /></li>
  </ul>
</li>


        </ul>

        <form className="d-flex align-items-center ms-2">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ display: showSearch ? 'block' : 'none' }}
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setShowSearch(!showSearch)}
          >
            <i className="bi bi-search"></i>
          </button>
        </form>

        <div className="d-flex align-items-center ms-2">
          <button className="btn btn-outline-secondary position-relative">
            <i className="bi bi-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartCount}
            </span>
          </button>
        </div>

        <button
          className="btn btn-outline-secondary ms-2"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill"></i>}
        </button>
      </div>
    </nav>
  )
}

export default navbar
