import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};
export const cartSlice = createSlice({
  name: "cSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      action.payload = { ...action.payload, qty: 1 };
      state.cartItems.push(action.payload);
    },
  },
});
export const { addToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
