import { useContext } from "react";
import MyContext from "../MyContext";

function Fourth() {
  var x = useContext(MyContext);
  console.log(x);
  return (
    <div className="mybox">
      <h1>
        Fourth Component {x[0]} {x[1]}
      </h1>
    </div>
  );
}

export default Fourth;
