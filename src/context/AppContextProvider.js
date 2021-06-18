import { createContext, useReducer, useContext } from "react";
import { reducer } from "../reducer/reducer";

const pendingTodo = { type: "pending", todo: [] };
const completedTodo = { type: "completed", todo: [] };

if (!localStorage.getItem("pendingTodo")) {
  localStorage.setItem("pendingTodo", JSON.stringify(pendingTodo));
}

if (!localStorage.getItem("completedTodo")) {
  localStorage.setItem("completedTodo", JSON.stringify(completedTodo));
}

const pending = JSON.parse(localStorage.getItem("pendingTodo"));
const completed = JSON.parse(localStorage.getItem("completedTodo"));

console.log(pending.todo);
console.log(completed.todo);
const initialState = {
  pendingTodo: pending.todo,
  completedTodo: completed.todo,
};
const Appcontext = createContext();

export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Appcontext.Provider value={{ state, dispatch }}>
      {children}
    </Appcontext.Provider>
  );
}

export const useApp = () => {
  return useContext(Appcontext);
};
