import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function ProductCard({ product }) {
  let dispatch = useDispatch();
  return (
    <div className="card" style={{ width: "200px" }}>
      <img src={product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description.slice(0, 35)}</p>
        <button
          onClick={() => {
            dispatch(addToCart(product));
          }}
          className="btn btn-primary"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
