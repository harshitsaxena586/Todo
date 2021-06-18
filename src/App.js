import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import PendingTodo from "./components/PendingTodo";
import CompletedTodo from "./components/CompletedTodo";
import { useApp } from "./context/AppContextProvider";
// import * from "";
function App() {
  const { dispatch } = useApp();
  function clear() {
    dispatch({ type: "CLEAR" });

    localStorage.clear();
  }
  return (
    <div className="App">
      <Toaster />
      <AddTodo />
      <PendingTodo />
      <CompletedTodo />
      <div className="fixed bottom-10 right-12">
        {" "}
        <button
          className="bg-blue-500 rounded-2xl text-3xl text-white px-4 py-2"
          onClick={() => clear()}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
