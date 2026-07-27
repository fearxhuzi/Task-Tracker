import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TaskTrackerContext } from "../store/AllFunction";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TbEditFilled } from "react-icons/tb";
import { TbArrowBackUp } from "react-icons/tb";
function HandleTask() {
  const [changeReadOnly, setChangeReadOnly] = useState(false);
  const { editState, onClickDel, onClickStatus } =
    useContext(TaskTrackerContext);
  const title = editState?.title;
  const todo = editState?.todo;
  const status = editState?.status;
  function onClickEdit() {
    setChangeReadOnly(true);
  }
  return (
    <div className="m-auto flex flex-col justify-between items-baseline max-sm:p-2 gap-4 w-[400px] max-sm:w-screen mt-10 mb-10 pl-2">
      <h2 className="mb-5 font-bold text-lg">View Task :</h2>
      <div className="pl-2 w-full">
        <h3 className="text-xs outline-zinc-200  text-gray-500">Title</h3>
        <input
          className="p-2 w-full font-semibold placeholder-black block outline-zinc-200 outline-1"
          readOnly={!changeReadOnly}
          placeholder={`${title}`}
        ></input>
        <h3 className="text-xs text-gray-500 mt-3">Description</h3>
        <textarea
          className="m-2 placeholder-black w-full outline-zinc-200 outline-1 block text-sm font-semibold"
          readOnly={!changeReadOnly}
          placeholder={`${todo}`}
        />
        <div className="h-20 flex items-center justify-between outline-zinc-200 outline-1 rounded">
          <Link
            onClick={onClickStatus}
            to="/"
            className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm border border-emerald-600 transition-all duration-200 cursor-pointer"
          >
            Mark as {status ? "Pending" : "Done"}
          </Link>

          <Link
            onClick={onClickEdit}
            className="py-2 cursor-pointer rounded px-2"
            to="/edit-task"
          >
            <TbEditFilled className=" text-green-600 transition-all ease-in text-2xl  hover:scale-115 active:scale-60 active:text-2xl" />
          </Link>

          <Link
            to="/"
            onClick={onClickDel}
            className=" py-2 text-red-500 transition-all ease-in text-2xl  hover:scale-115 active:scale-60 active:text-2xl cursor-pointer px-2"
          >
            <RiDeleteBin2Fill />
          </Link>

          <Link
            to="/"
            className="py-2 text-blue-500 transition-all ease-in text-2xl  hover:scale-115 active:scale-60 active:text-2xl cursor-pointer"
          >
            <TbArrowBackUp />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HandleTask;
