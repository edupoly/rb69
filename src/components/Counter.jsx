import { useState } from "react";
function Counter(props) {
  var [c, setC] = useState(props.iv);
  function inc() {
    setC(c + props.step);
    console.log(c);
  }
  function dec() {
    setC(c - props.step);
    console.log(c);
  }
  return (
    <div className="mybox">
      <h1>Counter: {c}</h1>
      <button
        onClick={() => {
          inc();
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dec();
        }}
      >
        Dec
      </button>
    </div>
  );
}

export default Counter;
