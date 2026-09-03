export default function Todo(props) {
  return (
    <li key={props.t}>
      {props.t}
      <button
        onClick={() => {
          props.deleteTodo(props.i);
        }}
      >
        Delete
      </button>
    </li>
  );
}
