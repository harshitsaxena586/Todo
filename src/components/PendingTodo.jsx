import React from "react";
import { useApp } from "../context/AppContextProvider";

export default function PendingTodo() {
  const { state, dispatch } = useApp();

  const completed = JSON.parse(localStorage.getItem("completedTodo"));
  const pending = JSON.parse(localStorage.getItem("pendingTodo"));

  const onComplteHandler = (todo) => {
    completed.todo = state.completedTodo;
    pending.todo = pending.todo.filter(
      (exisitingTodo) => exisitingTodo != todo
    );
    completed.todo = [...completed.todo, todo];
    console.log(completed.todo, "the once after update");
    dispatch({ type: "COMPLETEDTODO", payload: todo });
    localStorage.setItem("completedTodo", JSON.stringify(completed));
    localStorage.setItem("pendingTodo", JSON.stringify(pending));
  };

  return (
    <div>
      <h1 className="text-3xl font-nunito font-semibold m-4 rounded-lg text-gray-800 text-center  p-4">
        Pending
      </h1>
      {state.pendingTodo.map((task) => (
        <div className="mx-auto max-w-lg cursor-pointer">
          <h2
            onClick={() => onComplteHandler(task)}
            className="text-2xl m-4 rounded-lg shadow-md text-gray-800 bg-red-100 p-4"
          >
            {task}
          </h2>
        </div>
      ))}
    </div>
  );
}
