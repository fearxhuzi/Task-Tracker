import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdMovieEdit, MdAddTask } from "react-icons/md";
import { TbHomeEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function NavigateHead() {
  return (
    <>
      <div className="m-auto flex justify-between items-baseline max-sm:p-2 gap-4 w-[400px] max-sm:w-screen mt-10 mb-10">
        <h1 className="font-bold flex gap-2 items-center text-2xl">
          <MdMovieEdit className="text-green-500 text-3xl" />
          <span>Task Tracker</span>
        </h1>
        <div className="flex gap-2 ">
          <Link
            to="/"
            className="transition-all flex gap-1 items-center ease-in  hover:scale-105 active:scale-95 font-bold text-gray-400 px-2 py-1 outline-1 outline-zinc-200 hover:text-gray-600 hover:outline-zinc-500 rounded-md text-sm"
          >
            <TbHomeEdit className="text-green-500" />
            <span>Home</span>
          </Link>

          <Link
            to="/newtask"
            className="transition-all flex gap-1 items-center ease-in  hover:scale-105 active:scale-95 font-bold px-2 py-1 outline-1 outline-zinc-200 text-gray-400 hover:text-gray-600 hover:outline-zinc-500 rounded-md text-sm"
          >
            <MdAddTask className="text-green-500" />
            <span>Add Task</span>
          </Link>
        </div>
      </div>
    </>
  );
}
