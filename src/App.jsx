import Posts from "./features/blog/Posts";
import Counter from "./features/counter/Counter";
import Recipes from "./features/recipes/Recipes";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className="mybox">
      <h1>RB69</h1>
      <Posts></Posts>
      {/* <Recipes></Recipes> */}
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
