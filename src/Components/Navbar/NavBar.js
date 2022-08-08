import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("DarkTheme") !== null) {
      setDarkTheme(JSON.parse(window.localStorage.getItem("DarkTheme")));
    }
  }, []);

  useEffect(() => {
    if (darkTheme === true) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }

    window.localStorage.setItem("DarkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  // const [user] = useAuthState(auth);

  // const logout = () => {
  //     signOut(auth);
  //     localStorage.removeItem('accessToken');
  // };

  const menuItems = (
    <>
      <li className="dark:text-white dark:hover:bg-gray-400 hover:rounded-lg font-medium">
        <Link to="/">Home</Link>
      </li>
      <li className="dark:text-white dark:hover:bg-gray-400 hover:rounded-lg font-medium">
        <Link to="/appointment">Appointment</Link>
      </li>
      <li className="dark:text-white dark:hover:bg-gray-400 hover:rounded-lg font-medium">
        <Link to="/review">Review</Link>
      </li>
      <li className="dark:text-white dark:hover:bg-gray-400 hover:rounded-lg font-medium">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="dark:text-white dark:hover:bg-gray-400 hover:rounded-lg font-medium">
        <Link to="/about">About</Link>
      </li>
      {/* {
          user && <li><Link to="/dashboard">Dashboard</Link></li>
      }
      <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li> */}
    </>
  );
  return (
    <div className="navbar border-general sticky top-0 z-40 border-b bg-slate-50/60 backdrop-blur-2xl transition-colors duration-300 dark:bg-[#0B1120]/80">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dark:bg-slate-800 dark:text-white dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a
          href="/"
          className="btn btn-ghost normal-case text-2xl dark:text-white"
        >
          Travelovisor
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label class="swap swap-rotate pl-52">
          <input type="checkbox" onClick={() => setDarkTheme(!darkTheme)} />

          <svg
            class="swap-on fill-current w-8 h-8 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            class="swap-off fill-current w-8 h-8 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <div class="dropdown dropdown-end ml-auto">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-8 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 dark:bg-slate-800 dark:text-white "
          >
            <li>
              <a class="justify-between" href="/">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li>
              <p>Settings</p>
            </li>
            <li>
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
