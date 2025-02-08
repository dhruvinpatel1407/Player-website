import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact-us", label: "Contact" },
    { path: "/popular-player", label: "Popular Players" },
    { path: "/view-scores", label: "View Scores" },
  ];

  const menuLinks = menuItems.map((item, index) => (
    <li key={index} onClick={closeMenu}>
      <Link
        to={item.path}
        data-testid={`${item.label.toLowerCase()}-${isOpen ? "mobile" : "desktop"}`}
        className="flex items-center justify-center text-xl hover:text-blue-600"
      >
        {item.label}
      </Link>
    </li>
  ));
 

  return (
    <>
      <nav data-testid="navbar" className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-boxes"
                viewBox="0 0 16 16"
              >
                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
              </svg>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">{menuLinks}</ul>

          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="menu-button"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="w-10 h-8 flex flex-col justify-between">
                <span className="block w-full h-1 bg-white"></span>
                <span className="block w-full h-1 bg-white"></span>
                <span className="block w-full h-1 bg-white"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <ul
            id="mobile-menu"
            className={`${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            } transition transform absolute md:hidden top-16 left-0 w-full bg-white text-blue-900 px-4`}
          >
            {menuLinks}
          </ul>
        </div>
      </nav>

      
    </>
  );
}

export default Navbar;
