import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

function Counter() {
  var count = useSelector((state) => state.cReducer.count);
  var dispatch = useDispatch();
  return (
    <div className="mybox">
      <h1>Counter :{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
