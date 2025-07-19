import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../App.css";

const Header = () => {
  const location = useLocation();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className=" bg-white py-3 scroll-smooth">
      <nav className="flex relative mx-10 items-center justify-between">
        <HashLink smooth to="#slider">
          <img
            src="/images/clickifyr.png"
            className="lg:w-36 w-36 mt-1 -ml-3 lg:mx-6"
            alt=""
          />
        </HashLink>
        <div className="flex flex-col items-center text-slateblue lg:flex-row lg:justify-between">
          <ul
            className={`hidden md:hidden lg:flex text-lg font-Poppins font-bold items-center lg:flex-row gap-12 ${
              mobileMenuVisible ? "hidden" : ""
            }`}
          >
            <li>
              <HashLink
                smooth
                to="/#Home"
                className="block py-2 pr-4 pl-3 text-slateblue border-b lg:hover:bg-transparent lg:border-0 hover:text-amber-300 lg:p-0 relative transition duration-300 ease-in-out group"
                onClick={closeMobileMenu}
              >
                Home
                <div className="absolute w-full h-1 bg-amber-300 -bottom-5 transform origin-bottom transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100"></div>
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#services"
                className="py-2 pr-4 pl-3 text-slateblue hover:text-amber-300 relative transition duration-300 ease-in-out group"
                onClick={closeMobileMenu}
              >
                Services
                <div className="absolute w-full h-1 bg-amber-300 -bottom-5 transform origin-bottom transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100"></div>
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#Gallery"
                className="py-2 pr-4 pl-3 text-slateblue hover:text-amber-300 relative transition duration-300 ease-in-out group"
                onClick={closeMobileMenu}
              >
                Portfolio
                <div className="absolute w-full h-1 bg-amber-300 -bottom-5 transform origin-bottom transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100"></div>
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#Footer"
                className="py-2 pr-4 pl-3 text-slateblue hover:text-amber-300 relative transition duration-300 ease-in-out group"
                onClick={closeMobileMenu}
              >
                Contact us
                <div className="absolute w-full h-1 bg-amber-300 -bottom-5 transform origin-bottom transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100"></div>
              </HashLink>
            </li>
            <div className="relative flex items-center text-slateblue">
              <input
                type="text"
                placeholder="Search"
                className="border border-slateblue px-5 py-1 rounded-full focus:outline-none focus:border-blue-500 opacity-75"
              />
              <div className="absolute right-3">
                <i className="fas fa-search text-slateblue"></i>
              </div>
            </div>
          </ul>
        </div>
        <button
          id="toggleButton"
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <i className="fa-solid fa-bars-staggered color"></i>
        </button>
      </nav>
      {/* Responsive Navbar Links (Hidden by Default) */}
      <div
        id="mobileMenu"
        className={`lg:hidden absolute top-16  left-0 right-0 bg-white text-base text-slateblue z-50 ${
          mobileMenuVisible ? "" : "hidden"
        }`}
      >
        <ul className="text-center text-xl font-Poppins font-medium p-4 space-y-2">
          <li>
            <HashLink
              smooth
              to="#Home"
              className={`hover:text-amber-400 ${isActive("/") ? "" : ""}`}
              onClick={closeMobileMenu}
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#Footer"
              className={`hover:text-amber-400 ${
                isActive("#Footer") ? "text-white" : ""
              }`}
              onClick={closeMobileMenu}
            >
              Contact
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#1services"
              className={`hover:text-amber-400 ${
                isActive("#Footer") ? "text-white" : ""
              }`}
              onClick={closeMobileMenu}
            >
              Services
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#Gallery"
              className={`hover:text-amber-400 ${
                isActive("#services") ? "text-white" : ""
              }`}
              onClick={closeMobileMenu}
            >
              Portfolio
            </HashLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
