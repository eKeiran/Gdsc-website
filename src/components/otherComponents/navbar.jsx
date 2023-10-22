import React, { useState } from 'react';
import logo from '../../assets/GDSC-LOGO.png';
import mitLogo from '../../assets/mitadtlogo.png';
import { Link } from 'react-scroll';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header p-10 relative ${menuOpen ? 'overflow-hidden' : ''}`}>
      <div className={`sticky top-0 z-50 bg-white ${menuOpen ? 'md:shadow-lg' : ''}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-36 ">
            <img src={logo} width={100} alt="" />

            <div className="md:hidden ml-4">
              {menuOpen ? (
                <button
                  className="p-2"
                  onClick={closeMenu}
                  aria-label="Close Menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-800 hover:text-blue-500 transition duration-300 transform hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  className="p-2"
                  onClick={toggleMenu}
                  aria-label="Toggle Menu"
                >
                  <div
                    className={`h-1 w-6 bg-gray-800 ${
                      menuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  ></div>
                  <div
                    className={`h-1 w-6 bg-gray-800 my-1 ${
                      menuOpen ? 'opacity-0' : ''
                    }`}
                  ></div>
                  <div
                    className={`h-1 w-6 bg-gray-800 ${
                      menuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  ></div>
                </button>
              )}
            </div>
          </div>

          <div className="nav-web hidden md:flex md:gap-14 items-center cursor-pointer text-2xl text-gray-500">
            <Link to="aboutus" className="hover:text-blue-500 text-center">
              <span>About Us</span>
            </Link>
            <Link to="#tech" className="hover:text-blue-500 text-center">
              <span>Technologies</span>
            </Link>
            <Link to="ourteam" className="hover:text-blue-500 text-center">
              <span>Team</span>
            </Link>
            <Link to="events" className="hover:text-blue-500 text-center">
              <span>Our Events</span>
            </Link>
            <Link to="contact" className="hover:text-blue-500 text-center">
              <span>Contact Us</span>
            </Link>
          </div>

          <img
            className={`mit h-4.5vw ml-2vw mr-4 hidden md:block ${
              menuOpen ? 'hidden' : ''
            }`}
            onClick={toggleMenu}
            src={mitLogo}
            width={100}
            alt=""
          />
        </div>
      </div>

      {menuOpen && (
        <div
          className={`nav-dropdown fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-8 p-4 bg-white text-gray-800 transform transition-all ease-in-out ${
            menuOpen ? 'translate-x-0 duration-600' : '-translate-x-full duration-600'
          }`}
          style={{
            zIndex: 49,
          }}
        >
          <div className="flex flex-col space-y-4 cursor-pointer text-3xl text-center ">
            <Link
              to="aboutus"
              className="hover:text-blue-500"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              to="#tech"
              className="hover:text-blue-500"
              onClick={closeMenu}
            >
              Technologies
            </Link>
            <Link
              to="ourteam"
              className="hover:text-blue-500"
              onClick={closeMenu}
            >
              Team
            </Link>
            <Link
              to="events"
              className="hover:text-blue-500"
              onClick={closeMenu}
            >
              Our Events
            </Link>
            <Link
              to="contact"
              className="hover:text-blue-500"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
