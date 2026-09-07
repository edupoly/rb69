import { useEffect, useMemo, useState } from "react";
import "./Recipes.css";

const API_URL = "https://dummyjson.com/recipes";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function loadRecipes() {
      try {
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) throw new Error("Unable to load recipes");
        const data = await response.json();
        setRecipes(data.recipes ?? []);
        setStatus("success");
      } catch (error) {
        if (error.name !== "AbortError") setStatus("error");
      }
    }

    loadRecipes();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!selected) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selected]);

  const filteredRecipes = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return recipes;
    return recipes.filter((recipe) =>
      [recipe.name, recipe.cuisine, ...(recipe.tags ?? [])]
        .join(" ").toLowerCase().includes(term),
    );
  }, [query, recipes]);

  return (
    <main className="recipes-page">
      <header className="recipes-hero">
        <div className="recipes-topline"><span>Savour.</span><small>{recipes.length || "—"} recipes</small></div>
        <div className="recipes-heading">
          <p>RECIPES FOR EVERY TABLE</p>
          <h1>Cook something<br /><em>memorable.</em></h1>
          <div className="recipes-search">
            <span aria-hidden="true">⌕</span>
            <label className="sr-only" htmlFor="recipe-search">Search recipes</label>
            <input id="recipe-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search recipes or cuisines" />
          </div>
        </div>
      </header>

      <section className="recipes-content" aria-live="polite">
        <div className="recipes-title"><h2>{query ? "Search results" : "Explore the collection"}</h2>{status === "success" && <span>{filteredRecipes.length} dishes</span>}</div>

        {status === "loading" && <div className="recipes-grid">{Array.from({ length: 6 }, (_, index) => <div className="recipe-skeleton" key={index} />)}</div>}
        {status === "error" && <div className="recipes-message"><b>!</b><h2>We couldn’t reach the kitchen.</h2><p>Please refresh and try again.</p></div>}
        {status === "success" && filteredRecipes.length === 0 && <div className="recipes-message"><b>⌕</b><h2>No recipes found</h2><p>Try a different name, cuisine, or tag.</p></div>}

        {status === "success" && filteredRecipes.length > 0 && (
          <div className="recipes-grid">
            {filteredRecipes.map((recipe) => (
              <article className="recipe-card" key={recipe.id}>
                <button className="recipe-image" type="button" onClick={() => setSelected(recipe)} aria-label={`View ${recipe.name}`}>
                  <img src={recipe.image} alt={recipe.name} loading="lazy" /><span>{recipe.difficulty}</span>
                </button>
                <div className="recipe-body">
                  <div className="recipe-meta"><span>{recipe.cuisine}</span><span>★ {recipe.rating}</span></div>
                  <h3>{recipe.name}</h3>
                  <div className="recipe-stats"><span>◷ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span><span>♨ {recipe.caloriesPerServing} kcal</span><span>{recipe.servings} servings</span></div>
                  <button className="recipe-view" type="button" onClick={() => setSelected(recipe)}>View recipe <span>→</span></button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {selected && (
        <div className="recipe-modal" role="dialog" aria-modal="true" aria-labelledby="recipe-title" onClick={() => setSelected(null)}>
          <article onClick={(event) => event.stopPropagation()}>
            <button className="recipe-close" type="button" onClick={() => setSelected(null)} aria-label="Close recipe" autoFocus>×</button>
            <img src={selected.image} alt={selected.name} />
            <div className="recipe-modal-body">
              <p>{selected.cuisine} · {selected.difficulty}</p><h2 id="recipe-title">{selected.name}</h2>
              <div className="recipe-modal-stats"><span><strong>{selected.prepTimeMinutes + selected.cookTimeMinutes}</strong> minutes</span><span><strong>{selected.servings}</strong> servings</span><span><strong>{selected.rating}</strong> rating</span></div>
              <h3>Ingredients</h3><ul>{selected.ingredients.map((item) => <li key={item}>{item}</li>)}</ul>
              <h3>Method</h3><ol>{selected.instructions.map((step) => <li key={step}>{step}</li>)}</ol>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}

export default Recipes;
