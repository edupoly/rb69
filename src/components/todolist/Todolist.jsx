import { useEffect, useMemo, useState } from "react";
import "./Todolist.css";

const STORAGE_KEY = "rb69-todos";
const starterTodos = [
  { id: 1, text: "Plan the day", completed: true },
  { id: 2, text: "Finish the project", completed: false },
  { id: 3, text: "Take a proper break", completed: false },
];

function getInitialTodos() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : starterTodos;
  } catch {
    return starterTodos;
  }
}

function Todolist() {
  const [todos, setTodos] = useState(getInitialTodos);
  const [draft, setDraft] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const visibleTodos = useMemo(() => {
    if (filter === "active") return todos.filter((todo) => !todo.completed);
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    return todos;
  }, [filter, todos]);

  const remaining = todos.filter((todo) => !todo.completed).length;
  const completed = todos.length - remaining;

  function addTodo(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    setTodos((current) => [
      ...current,
      { id: crypto.randomUUID(), text, completed: false },
    ]);
    setDraft("");
  }

  function toggleTodo(id) {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  return (
    <main className="todo-page">
      <section className="todo-card" aria-labelledby="todo-title">
        <header className="todo-header">
          <p className="todo-eyebrow">MY WORKSPACE</p>
          <h1 id="todo-title">Today’s focus</h1>
          <p>Small steps, clearly organized.</p>
        </header>

        <form className="todo-form" onSubmit={addTodo}>
          <label className="sr-only" htmlFor="new-todo">Add a new task</label>
          <input
            id="new-todo"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="What needs to be done?"
            autoComplete="off"
          />
          <button type="submit" disabled={!draft.trim()}>
            <span aria-hidden="true">+</span> Add task
          </button>
        </form>

        <div className="todo-toolbar">
          <div className="todo-filters" aria-label="Filter tasks">
            {["all", "active", "completed"].map((item) => (
              <button
                key={item}
                type="button"
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
              >
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          <span className="todo-count">{remaining} left</span>
        </div>

        <ul className="todo-list" aria-live="polite">
          {visibleTodos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className="checkmark" aria-hidden="true">✓</span>
                <span className="todo-text">{todo.text}</span>
              </label>
              <button
                type="button"
                className="delete-button"
                onClick={() => deleteTodo(todo.id)}
                aria-label={`Delete ${todo.text}`}
              >×</button>
            </li>
          ))}
        </ul>

        {visibleTodos.length === 0 && (
          <div className="todo-empty">
            <span aria-hidden="true">✓</span>
            <p>No tasks here. You’re all caught up!</p>
          </div>
        )}

        <footer className="todo-footer">
          <span>{todos.length} {todos.length === 1 ? "task" : "tasks"} total</span>
          <button
            type="button"
            onClick={() => setTodos((current) => current.filter((todo) => !todo.completed))}
            disabled={completed === 0}
          >Clear completed</button>
        </footer>
      </section>
    </main>
  );
}

export default Todolist;
