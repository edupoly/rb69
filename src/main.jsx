import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./components/counter/Counter.jsx";
import Todolist from "./components/todolist/Todolist.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Products from "./components/products/Products.jsx";
import Recipes from "./components/recipes/Recipes.jsx";
import ProductDetails from "./components/products/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/counter",
        element: <Counter></Counter>,
      },
      {
        path: "/todolist",
        element: <Todolist></Todolist>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/kuralu",
        element: <Recipes></Recipes>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>,
);
