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
import ADM  from './components/adm'
import PEDIDO from './components/pedido'
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
  {
    path:"adm",
    element:<ADM/>
    
  },
  {
    path:"Pedido",
    element:<PEDIDO/>
  }
 
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
