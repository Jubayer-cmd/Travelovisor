import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import auth from "./../../firebase.init";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="dark:bg-[#0B1222] dark:text-white">
      <div className="flex ">
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col overflow-hidden">
            <label
              for="my-drawer-2"
              className="btn dark:bg-[#021338] drawer-button lg:hidden"
            >
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
              Menu
            </label>
            <div>
              <Outlet></Outlet>
            </div>
          </div>
          <div className="drawer-side ">
            <label for="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu bg-violet-300 dark:text-white dark:bg-[#021338] p-4 overflow-y-auto w-80 divide-y divide-gray-100 text-base-content">
              <li>
                <Link to="/dashboard">
                  <i className="fa-solid fa-user"></i>
                  My Profile
                </Link>
              </li>
              {!admin && (
                <>
                  <li>
                    <Link to="/dashboard/order">
                      <i className="fa-solid fa-list-check"></i> My Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/review">
                      <i className="fa-brands fa-stack-exchange"></i> Add a
                      review
                    </Link>
                  </li>
                </>
              )}
              {admin && (
                <>
                  <li>
                    <Link to="/dashboard/manageOrder">
                      <i className="fa-solid fa-bars-progress"></i> Manage Order
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manageProducts">
                      <i className="fa-solid fa-basket-shopping"></i>Manage
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addProduct">
                      <i className="fa-solid fa-cart-plus"></i>Add Product
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
