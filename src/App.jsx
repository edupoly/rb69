import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="mybox">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
