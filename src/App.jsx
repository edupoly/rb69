import Login from "./Login";
import Quiz from "./Quiz";
import { useSelector } from "react-redux";
function App() {
  let token = useSelector((state) => state.userR.token);

  return (
    <div className="mybox">
      <h1>RB69</h1>
      {!token && <Login></Login>}
      {token && <Quiz></Quiz>}
    </div>
  );
}

export default App;
