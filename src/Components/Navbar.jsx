import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  var x = useSelector((state) => state.cartReducer);
  console.log(x);
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Edupoly
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/counter">
                Counter
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/todos">
                Todolist
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/employees">
                Employees
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cart">
                Cart ({x.cartItems.length})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
