import Second from "./Second";

function First(props) {
  return (
    <div className="mybox">
      <h1>First Component {props.a}</h1>
      <Second></Second>
    </div>
  );
}

export default First;
