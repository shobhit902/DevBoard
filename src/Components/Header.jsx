import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-8xl mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1 className="text-xl font-bold">Logo</h1>

          {/* Navigation Links */}
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-500"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-500"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
