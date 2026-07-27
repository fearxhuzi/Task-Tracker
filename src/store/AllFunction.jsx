import { createContext, useEffect, useReducer, useState } from "react";
export const TaskTrackerContext = createContext();
const reducerFunc = (taskData, action) => {
  if (action.type === "SET_DATA") {
    return [action.payload, ...taskData];
  } else if (action.type === "DELETE_TEXT") {
    return taskData.filter((obj) => obj.id != action.payload.id);
  } else if (action.type === "UPDATE_STATUS") {
    return taskData.map((obj) =>
      obj.id === action.payload.id ? { ...obj, updata: !obj.updata } : obj,
    );
  } else if (action.type === "EDIT_TASK") {
    return taskData.map((obj) =>
      obj.id === action.payload.id
        ? { ...obj, title: action.payload.title, todo: action.payload.todo }
        : obj,
    );
  } else {
    return taskData;
  }
};
const TaskTrackerContextReducer = ({ children }) => {
  const [taskData, dispatchTaskData] = useReducer(reducerFunc, [], () => {
    try {
      const savedData = localStorage.getItem("SavedData");
      return savedData ? JSON.parse(savedData) : [];
    } catch {
      return [];
    }
  });
  const [editState, setEditState] = useState(() => {
    try {
      const savedState = localStorage.getItem("SavedState");
      return savedState ? JSON.parse(savedState) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("SavedData", JSON.stringify(taskData));
    localStorage.setItem("SavedState", JSON.stringify(editState));
  }, [taskData, editState]);

  function getValue(title, description) {
    if (title.current.value && description.current.value) {
      const obj = {
        type: "SET_DATA",
        payload: {
          id: crypto.randomUUID(),
          title: title.current.value,
          todo: description.current.value,
          updata: false,
        },
      };
      dispatchTaskData(obj);
    }
    title.current.value = "";
    description.current.value = "";
  }
  function onClickEditTask(title, description, id) {
    if (title.current.value && description.current.value) {
      const obj = {
        type: "EDIT_TASK",
        payload: {
          id: id,
          title: title.current.value,
          todo: description.current.value,
        },
      };
      dispatchTaskData(obj);
    }
  }
  function onClickDel() {
    const { todo, title, id } = editState;
    const obj = {
      type: "DELETE_TEXT",
      payload: {
        title: title,
        id: id,
      },
    };
    dispatchTaskData(obj);
  }
  function functionHandle(todo, title, id, status) {
    const obj = {
      todo: todo,
      title: title,
      id: id,
      status: status,
    };
    setEditState(obj);
  }
  function onClickStatus() {
    const { id } = editState;
    const obj = {
      type: "UPDATE_STATUS",
      payload: {
        id: id,
      },
    };
    dispatchTaskData(obj);
  }
  return (
    <TaskTrackerContext.Provider
      value={{
        taskData,
        getValue,
        functionHandle,
        editState,
        onClickDel,
        onClickStatus,
        onClickEditTask,
      }}
    >
      {children}
    </TaskTrackerContext.Provider>
  );
};
export default TaskTrackerContextReducer;
