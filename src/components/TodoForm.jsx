import { useState } from "react";

function TodoForm(props) {
  var [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(ev) => {
          setNewTodo(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          props.addTodo(newTodo);
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoForm;
