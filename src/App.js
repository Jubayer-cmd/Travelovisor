import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar></NavBar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
