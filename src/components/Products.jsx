import { useEffect, useState } from "react";

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
      <ul>
        {products.map((p) => {
          return <li>{p.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Products;
