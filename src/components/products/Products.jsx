import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
function Products() {
  var [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts([...data.products]);
      });
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "flex" }}>
        <ul style={{ width: "50%" }}>
          {products.map((p) => {
            return (
              <li>
                <Link to={`/products/productDetails/${p.id}`}>{p.title}</Link>
              </li>
            );
          })}
        </ul>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Products;
