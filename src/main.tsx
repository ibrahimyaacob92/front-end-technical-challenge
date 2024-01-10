import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Home from "./views/Home/Home.tsx";
import Inventory from "./views/Inventory/Inventory.tsx";
import Analysis from "./views/Analysis/Analysis.tsx";
import Models from "./views/Models/Models.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/analysis/:modelName",
        element: <Analysis />,
      },
      {
        path: "/:modelName/analysis",
        element: <Analysis />,
      },
      {
        path: "/models",
        element: <Models />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
