import { Outlet } from "react-router-dom";
import "./App.css";
import NavigateHead from "./Components/navigateHead";
import TaskTrackerContextReducer from "./store/AllFunction";
import { useContext } from "react";

function App() {
  return (
    <>
      <TaskTrackerContextReducer>
        <NavigateHead />
        <Outlet />
      </TaskTrackerContextReducer>
    </>
  );
}

export default App;
