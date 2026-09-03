import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function Todolist(props) {
  var [todos, setTodos] = useState([]);
  function addTodo(ntd) {
    setTodos([...todos, ntd]);
  }
  function deleteTodo(index) {
    setTodos(todos.filter((t, ind) => index != ind));
  }

  return (
    <div className="mybox">
      <h1>{props.title} Todolist</h1>
      <TodoForm addTodo={addTodo}></TodoForm>
      <ul>
        {todos.map((t, i) => {
          return <Todo t={t} i={i} deleteTodo={deleteTodo}></Todo>;
        })}
      </ul>
    </div>
  );
}
