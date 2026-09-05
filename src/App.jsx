import First from "./components/First.jsx";
import MyContext from "./MyContext.js";
function App() {
  var a = "sreeleela";
  return (
    <MyContext.Provider value={["Rukmini", "sreeleela"]}>
      <div className="mybox">
        <h1>RB69 {a}</h1>
        <First a={a} />
      </div>
    </MyContext.Provider>
  );
}

export default App;
