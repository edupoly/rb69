import Counter from "./components/Counter";

function App() {
  return (
    <div className="mybox">
      <h1>RB69</h1>
      <Counter iv={10} step={5}></Counter>
      <Counter iv={20} step={2}></Counter>
    </div>
  );
}

export default App;
