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
import ADM from './components/adm'
import PEDIDO from './components/pedido'
import PEDIDO2 from './components/pedido2'
import PEDIDO3 from './components/pedido3'
import EDITE from './components/edit'
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cadastrar",
    element: <Casdastro />,
  },

  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "adm",
    element: <ADM />

  },
  {
    path: "Pedido",
    element: <PEDIDO />
  },{
    path: "Pedido2",
    element: <PEDIDO2/>
  },
  {
    path: "Pedido3",
    element: <PEDIDO3/>
  },

  {
    path:'edit',
    element:<EDITE/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
