import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Package from "./Components/Home/Package";
import Login from "./Components/Login/Login";
import RequireAdmin from "./Components/Login/RequireAdmin";
import RequireAuth from "./Components/Login/RequireAuth";
import Signup from "./Components/Login/Signup";
import NavBar from "./Components/Navbar/NavBar";
import AddPackage from "./Components/Product/AddPackage";
import Dashboard from "./Components/Product/Dashboard";
import ManageOrder from "./Components/Product/ManageOrder";
import ManageProduct from "./Components/Product/ManageProduct";
import Order from "./Components/Product/Order";
import Profile from "./Components/Product/Profile";
import Review from "./Components/Product/Review";
function App() {
  return (
    <div className="text-base">
      <NavBar></NavBar>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/package/:id" element={<Package></Package>}></Route>
        <Route path="/signin" element={<Signup></Signup>}></Route>
        <Route path="login" element={<Login></Login>}></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<Profile></Profile>}></Route>
          {/* <Route
            path="/dashboard/payment/:id"
            element={<Payments></Payments>}
          ></Route> */}
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="order" element={<Order></Order>}></Route>
          <Route
            path="manageOrder"
            element={
              <RequireAdmin>
                <ManageOrder></ManageOrder>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProduct></ManageProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addPackage"
            element={
              <RequireAdmin>
                <AddPackage></AddPackage>
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
