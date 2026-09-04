import Counter from "./components/Counter";
import { useEffect, useState } from "react";
function App() {
  console.log("App");
  var [fn, setFn] = useState("");

  useEffect(() => {
    console.log("App Comp useEffect with no dep array");
  });

  useEffect(() => {
    console.log("App Comp useEffect with empty dep array");
  }, []);

  return (
    <div className="mybox">
      <h1>RB69</h1>
      <input
        type="text"
        onChange={(ev) => {
          setFn(ev.target.value);
        }}
      />
      :{fn}
      <Counter iv={10} step={1}></Counter>
    </div>
  );
}

export default App;
