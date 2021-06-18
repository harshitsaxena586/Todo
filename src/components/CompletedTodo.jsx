import React from "react";
import { useApp } from "../context/AppContextProvider";

export default function CompletedTodo() {
  const { state, dispatch } = useApp();
  const { completedTodo } = state;
  return (
    <div>
      <h1 className="text-3xl font-nunito font-semibold m-4 rounded-lg text-gray-800 text-center  p-4">
        Completed
      </h1>
      {completedTodo.map((todo) => (
        <div className="mx-auto max-w-lg cursor-pointer">
          <h2 className="text-2xl m-4 rounded-lg shadow-md text-gray-800 bg-green-200 p-4">
            {todo}
          </h2>
        </div>
      ))}
    </div>
  );
}
