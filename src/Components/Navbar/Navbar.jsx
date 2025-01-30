import { useState } from "react";
import "./navbar.css";
import 'boxicons';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="navParent">
      <nav className="nav">
        <div className="logo">
          MEDHA 2K25
        </div>

        <div className="menu">
          <a href="#">Events</a>
          <a href="#">Contact</a>
          <a href="#">Team</a>
          <a href="#">Rules</a>
          <a href="#" className="reg" style={{color: "#fff"}}>Register</a>
        </div>

        <div className="mobile">
          <i className="bx bx-menu" onClick={toggleMenu}></i>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="dropdown-menu">
          <a href="#">Events</a>
          <a href="#">Contact</a>
          <a href="#">Team</a>
          <a href="#">Rules</a>
          <a href="#">Register</a>
        </div>
      )}
    </div>
  );
};
