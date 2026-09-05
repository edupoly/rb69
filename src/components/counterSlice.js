export function reducer(state, action) {
  if (action.type === "INC") {
    state.count = state.count + 1;
  }
  if (action.type === "DEC") {
    state.count--;
  }
  return { ...state };
}
export const initialState = { count: 0 };
