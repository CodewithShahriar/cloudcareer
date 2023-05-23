import { CloudIcon } from "@heroicons/react/24/solid";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" bg-blue-50">
      <div className="px-4 py-5 relative  md:px-24 lg:px-8">
        <div className="my-container relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="inline-flex items-center">
            <CloudIcon className="lg:h-12 lg:w-12 md:h-10 md:w-10 h-8 w-8 text-blue-500" />
            <span className="ml-2 lg:text-4xl md:text-3xl text-2xl font-bold tracking-wide text-gray-800">
              Cloud Career
            </span>
          </Link>

          {/* Nav Items Section */}
          <ul className="items-center mx-auto text-lg font-bold hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appliedJobs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="ml-auto hidden lg:block">
              <Link to="/startApplying" className="inline-flex items-center">
                <button className="btn text-xl font-bold tracking-wide text-gray-800">
                  Start Applying
                </button>
              </Link>
            </li>
          </ul>

          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3BottomRightIcon className="w-7 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <CloudIcon className="h-6 w-6 text-blue-500" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                          CloudX
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-7 hover:bg-slate-200 hover:rounded-xl text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/" className="default font-bold">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/books"
                          className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Statistics
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Applied Jobs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="inline-flex items-center">
                          <button className="btn  lg:text-xl text- font-bold tracking-wide text-gray-800">
                            Start Applying
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
