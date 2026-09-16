import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todolist/todolistSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { recipesApi } from "../services/recipesApi";
import { blogApi } from "../services/blogAPI";
import { productsApi } from "../services/productsApi";
import cartReducer from "../features/products/cartSlice";
import { empApi } from "../services/employeeApi";
import { studentsApi } from "../services/studentsApi";

export const store = configureStore({
  reducer: {
    cReducer: counterReducer,
    tReducer: todoReducer,
    cartReducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [empApi.reducerPath]: empApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      recipesApi.middleware,
      blogApi.middleware,
      productsApi.middleware,
      empApi.middleware,
      studentsApi.middleware,
    ),
});
setupListeners(store.dispatch);
