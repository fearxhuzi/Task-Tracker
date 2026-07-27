import { useContext, useRef } from "react";
import { TaskTrackerContext } from "../store/AllFunction";
import { Link } from "react-router-dom";
function TaskShowCase() {
  const { taskData,functionHandle } = useContext(TaskTrackerContext);
  return (
    <>
      <div className="pl-2">
        <h2 className="mb-5 font-bold text-lg">All Task ({taskData.length})</h2>
        <div className="pl-2 flex flex-col gap-3">
          {taskData &&
            taskData.map((obj) => {
              return (
                <div key={obj.id} className="flex justify-between items-center">
                  <div className={`font-bold mb-2  ${obj.updata ? "line-through  decoration-2" : ""}`}>{obj.title}</div>
                  <div className="flex gap-2">
                    <div
                      className={`text-xs flex items-center px-1 rounded ${obj.updata ? "bg-green-300" : "bg-yellow-100"}`}
                    >
                      {obj.updata ? "Done" : "Pending"}
                    </div>
                    <div>
                      <Link onClick={()=>{functionHandle(obj.todo,obj.title,obj.id,obj.updata)}} to="view-task" className="text-sm flex items-center text-blue-600 bg-blue-400 rounded px-2 text-white font-bold underline">
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          {taskData.length === 0 && (
            <h1 className="text-center font-bold text-lg text-emerald-600 mt-6">
              🎉 Have Fun! No tasks left.
            </h1>
          )}
        </div>
      </div>
    </>
  );
}
export default TaskShowCase;
