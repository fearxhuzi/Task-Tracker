import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HandleTask from "./Components/HandleTask";
import AddTask from "./Components/AddTask.jsx";
import Home from "./Components/Home.jsx";
import EditTask from "./Components/editTask";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "newtask", element: <AddTask /> },
      { path: "edit-task", element: <EditTask /> },
      { path: "view-task", element: <HandleTask /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
