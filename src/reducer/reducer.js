export function reducer(state, { payload, type }) {
  switch (type) {
    case "ADDPENDING":
      return { ...state, pendingTodo: [...state.pendingTodo, payload] };
    case "COMPLETEDTODO":
      state.pendingTodo = state.pendingTodo.filter((todo) => todo != payload);
      return { ...state, completedTodo: [...state.completedTodo, payload] };
    case "CLEAR":
      return { ...state, pendingTodo: [], completedTodo: [] };
    default:
      return state;
  }
}
