import { useGetAllProductsQuery } from "../../services/productsApi";
import ProductCard from "./ProductCard";

function Products() {
  var { isLoading, data } = useGetAllProductsQuery();
  console.log(isLoading, data);
  return (
    <div className="mybox">
      <h1>Products</h1>
      {isLoading && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      <div className="d-flex flex-wrap gap-3 justify-content-between">
        {data?.products?.map((p) => {
          return <ProductCard product={p}></ProductCard>;
        })}
      </div>
    </div>
  );
}

export default Products;
