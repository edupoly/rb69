import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todolistSlice";

function Todolist() {
  var todos = useSelector((state) => state.tReducer.todos);
  var dispatch = useDispatch();
  var [ntd, setNtd] = useState("");
  return (
    <div className="mybox">
      <h1>Todolist</h1>
      <input
        type="text"
        id="d1"
        onChange={(e) => {
          setNtd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(ntd));
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
