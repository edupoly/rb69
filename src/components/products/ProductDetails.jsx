import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  var p = useParams();
  console.log(p);
  var [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${p.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct({ ...data });
      });
  }, []);

  return (
    <div>
      <h1>ProductDetails</h1>
      <h3>{product?.title}</h3>
      <img src={product?.thumbnail} alt="" />
    </div>
  );
}

export default ProductDetails;
