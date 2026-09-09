import { useGetAllRecipesQuery } from "../../services/recipesApi";

function Recipes() {
  var { isLoading, data } = useGetAllRecipesQuery();
  console.log(isLoading, data);
  return (
    <div className="mybox">
      <h1>Recipes</h1>
      {isLoading && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {data?.recipes?.map((r) => {
        return <li>{r.name}</li>;
      })}
    </div>
  );
}

export default Recipes;
