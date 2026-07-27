import React from "react";
import { Link } from "react-router-dom";
export default function NavigateHead() {
  return (
    <>
      <div className="m-auto flex justify-between items-baseline max-sm:p-2 gap-4 w-[400px] max-sm:w-screen mt-10 mb-10">
        <h1 className="font-bold text-2xl">Task Tracker</h1>
        <div className="flex gap-2 ">
          <Link
            to="/"
            className="transition-all  ease-in  hover:scale-105 active:scale-95 font-bold text-gray-400 px-2 py-1 outline-1 outline-zinc-200 hover:text-gray-600 hover:outline-zinc-500 rounded-md text-sm"
          >
            Home
          </Link>

          <Link
            to="/newtask"
            className="transition-all  ease-in  hover:scale-105 active:scale-95 font-bold px-2 py-1 outline-1 outline-zinc-200 text-gray-400 hover:text-gray-600 hover:outline-zinc-500 rounded-md text-sm"
          >
            Add Task
          </Link>
        </div>
      </div>
    </>
  );
}
