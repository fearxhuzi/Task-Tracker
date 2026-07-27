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
  }
};
const TaskTrackerContextReducer = ({ children }) => {
  const [taskData, dispatchTaskData] = useReducer(reducerFunc, []);
  const [editState, setEditState] = useState();

  function getValue(title, description) {
    if (title.current.value && description.current.value) {
      const obj = {
        type: "SET_DATA",
        payload: {
          id: Math.random(),
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

  // useEffect(() => {
  //   fetch("https://dummyjson.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.todos);
  //     })
  //     .catch((err) => console.log("error fetching data: ", err));
  // }, []);

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
