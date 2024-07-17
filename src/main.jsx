import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Pages/Login"
import Levels from "./Pages/levels"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css";
import App from "./App";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>
);  