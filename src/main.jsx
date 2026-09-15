import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todolist from "./features/todolist/Todolist.jsx";
import Counter from "./features/counter/Counter.jsx";
import Posts from "./features/blog/Posts.jsx";
import Products from "./features/products/Products.jsx";
import Employees from "./features/employees/Employees.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/todos",
        element: <Todolist></Todolist>,
      },
      {
        path: "/counter",
        element: <Counter></Counter>,
      },
      {
        path: "/blog",
        element: <Posts></Posts>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/employees",
        element: <Employees></Employees>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
