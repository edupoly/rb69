import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/counter">Counter</Link>
      <br />
      <Link to="/products">Products</Link>
      <br />
      <Link to="/gallery">Gallery</Link>
      <br />
      <Link to="/todolist">Todolist</Link>
      <br />
      <Link to="/kuralu">Recipes</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
