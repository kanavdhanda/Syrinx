import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Pages/Login"
import Levels from "./Pages/levels"
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/lvls"
          element={isAuthenticated ? <Levels /> : <Login />}
        />
      </Routes>
    </Router>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
