import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md"
        style={{ backgroundColor: "#FF5733" }}
      >
        <div className="container-fluid ">
          <Link to={"/"} className="navbar-brand" style={{ color: "white" }}>
            Logo
          </Link>
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
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/cellphones"}
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  Cellphones
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/videogames"}
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  Video Games
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
