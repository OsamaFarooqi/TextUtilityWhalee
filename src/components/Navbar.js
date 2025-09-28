import React from "react";
// import PropTypes from "prop-types";

export default function Navbar({
  title = "Set title here",
  aboutText = "About",
  mode = "light",
  handleToggleMode,
  handleDarkMode,
  setDarkModeColor,
  darkModeColor,
}) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-primary navbar-${mode} bg-${mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {title}
        </a>
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
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {aboutText}
              </a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          {/* <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onClick={handleToggleMode}
            />
            <label
              className={`form-check-label text-${
                mode === "light" ? "dark" : "light"
              }`}
              htmlFor="switchCheckDefault"
            >
              Enable DarkMode
            </label>{" "}
          </div> */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radioDefault"
              id="light"
              checked={setDarkModeColor === "#ffffffff"}
              onChange={() => handleDarkMode("light", "#ffffffff")}
            />
            <label
              className={`form-check-label text-${
                mode === "light" ? "dark" : "light"
              }`}
              htmlFor="radioDefault1"
            >
              White
            </label>
          </div>
          <div className="form-check mx-3">
            <input
              className="form-check-input"
              type="radio"
              name="radioDefault"
              id="green"
              checked={darkModeColor === "#01341cff"}
              onChange={() => handleDarkMode("dark", "#01341cff")}
            />
            <label
              className={`form-check-label text-${
                mode === "light" ? "dark" : "light"
              }`}
              htmlFor="radioDefault2"
            >
              Green
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radioDefault"
              id="yellow"
              checked={setDarkModeColor === "#5d4600ff"}
              onChange={() => handleDarkMode("dark", "#5d4600ff")}
            />
            <label
              className={`form-check-label text-${
                mode === "light" ? "dark" : "light"
              }`}
              htmlFor="radioDefault1"
            >
              Yellow
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
