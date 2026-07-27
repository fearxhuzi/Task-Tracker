import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { TaskTrackerContext } from "../store/AllFunction";
function AddTask() {
  const { taskData, getValue } = useContext(TaskTrackerContext);
  const title = useRef("");
  const description = useRef("");

  return (
    <>
      <div className="max-sm:p-2 m-auto w-[400px] max-sm:w-screen">
        <h2 className="text-xs text-gray-500">Title</h2>
        <input
          ref={title}
          className="mt-2 ml-2 w-80 text-sm px-1 py-1 outline-zinc-200 outline-1 rounded-md focus:outline-1 focus:outline-blue-500 pl-2"
          type="text"
          placeholder="e.g. Finish Homework"
        />
        <h2 className="text-xs text-gray-500">Description</h2>
        <textarea
          ref={description}
          className="mt-2 w-80 h-18 ml-2 text-sm px-1 py-1 outline-zinc-200 outline-1 rounded-md focus:outline-1 focus:outline-blue-500 pl-2"
          type="text"
          placeholder="Option Details....."
        />
        <div className="mt-4 flex items-center gap-4">
          <button
            type="submit"
            onClick={() => getValue(title, description)}
            className=" text-white font-bold cursor-pointer bg-blue-500 px-3 py-2 rounded-md"
          >
            Submit
          </button>
          <Link
            to="/"
            className="text-sm underline hover:bg-blue-200 px-3 py-2 rounded-md block text-center "
          >
            Cancel
          </Link>
        </div>
      </div>
    </>
  );
}
export default AddTask;
