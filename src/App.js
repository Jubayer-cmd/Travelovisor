import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Package from "./Components/Home/Package";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/package/:id" element={<Package></Package>}></Route>
      </Routes>
    </div>
  );
}

export default App;
