import { useReducer } from "react";
import { reducer, initialState } from "./counterSlice";

function Coutner() {
  var [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="mybox">
      <h1>Coutner:{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        Thagginchu
      </button>
    </div>
  );
}

export default Coutner;

// state //action //ui
