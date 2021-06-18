import React, { useState } from "react";
import { useApp } from "../context/AppContextProvider";
import toast from "react-hot-toast";
export default function AddTodo() {
  const [todo, settodo] = useState("");
  const { state, dispatch } = useApp();

  function onSubmitHandler(event) {
    event.preventDefault();
    event.target.reset();
    const inputNotNull = todo.match(/[^-\s]/);
    if (inputNotNull) {
      settodo("");
      const pending = JSON.parse(localStorage.getItem("pendingTodo"));
      const newTodos = [...pending.todo, todo];
      pending.todo = newTodos;
      localStorage.setItem("pendingTodo", JSON.stringify(pending));
      dispatch({ type: "ADDPENDING", payload: todo });
    } else return toast.error("Cant Add Nothing Todo");
  }
  console.log(state);

  return (
    <div className=" p-6 max-w-2xl mx-auto rounded-lg justify-center ">
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        className="max-w-xl mx-auto rounded-lg shadow-2xl flex flex-col overflow-hidden p-6 space-y-8"
      >
        <input
          onChange={(e) => settodo(e.target.value)}
          type="city"
          name="title"
          placeholder="Add New Todo "
          class="block p-4 w-full text-2xl text-gray-800 appearance-none focus:outline-none bg-transparent"
        />
      </form>
      {todo !== "" && (
        <h1 className="text-3xl  text-gray-600 text-center text-blue-500 p-8 font-nunito font-semibold">
          Hit Enter Once Done
        </h1>
      )}
    </div>
  );
}
