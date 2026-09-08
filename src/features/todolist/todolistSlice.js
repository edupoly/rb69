import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: ["goto goa", "play cricket", "pay fee"],
};
export const todoslice = createSlice({
  name: "tdlistReducer",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: () => {},
  },
});
export const { addTodo, deleteTodo } = todoslice.actions;
const todoReducer = todoslice.reducer;
export default todoReducer;
