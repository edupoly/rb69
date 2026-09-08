import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todolist/todolistSlice";

export const store = configureStore({
  reducer: {
    cReducer: counterReducer,
    tReducer: todoReducer,
  },
});
