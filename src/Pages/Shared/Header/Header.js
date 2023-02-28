import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);
  let activeStyle = {
    color: "red",
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };

  return (
    <div>
      <nav className="w-full bg-gray-400 mb-5">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <h2 className="text-2xl  hover:text-red-500 text-white">
                <Link to="/">Dragon News</Link>
              </h2>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex-col md:space-x-6 md:space-y-0">
                {user?.photoURL ? (
                  <img
                    className="w-10 h-10 inline rounded-full"
                    src={user?.photoURL}
                  />
                ) : (
                  <span className="w-10 h-10 mt-5 inline rounded-full">
                    <button>
                      <FaUser></FaUser>
                    </button>
                  </span>
                )}

                {user ? (
                  <>
                    <span>{user?.displayName}</span>
                    <button
                      onClick={handleLogOut}
                      className="border-black px-3 py-2 bg-white rounded-lg border-2"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink to={"/login"}>Login</NavLink>
                    <NavLink to={"/registration"}>Register</NavLink>
                  </>
                )}

                <NavLink
                  to="/home"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="text-white ml-7 hover:text-red-300"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/blog"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="text-white ml-7 hover:text-red-300"
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/chart"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="text-white ml-7 hover:text-red-300"
                >
                  Summary
                </NavLink>
                {/* <NavLink
                  to="login"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className=" text-white ml-7 hover:text-red-300"
                >
                  Login
                </NavLink>
                <NavLink
                  to="registration"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className=" text-white ml-7 hover:text-red-300"
                >
                  Register
                </NavLink> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
