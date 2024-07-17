import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Pages/Login"
import Levels from "./Pages/levels"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css";

const isAuthenticated = false;

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login />, 
    children: [
      {
        path: 'lvis',
        element: isAuthenticated ? <Levels /> : <Login />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);  