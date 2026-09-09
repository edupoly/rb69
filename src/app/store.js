import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todolist/todolistSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { recipesApi } from "../services/recipesApi";
import { blogApi } from "../services/blogAPI";
export const store = configureStore({
  reducer: {
    cReducer: counterReducer,
    tReducer: todoReducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware, blogApi.middleware),
});
setupListeners(store.dispatch);
