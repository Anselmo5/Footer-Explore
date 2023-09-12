import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App"
import Casdastro from "./components/cadastrar"
import Home from './components/Home'
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "cadastrar",
    element: <Casdastro/>,
  },

  {
    path: "home",
    element:<Home/>,
  },
 
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
