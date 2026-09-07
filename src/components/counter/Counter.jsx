import { useReducer } from "react";
import { reducer, initialState } from "./counterSlice";

function Counter() {
  var [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="mybox">
      <h1>Counter:{state.count}</h1>
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

export default Counter;

// state //action //ui
