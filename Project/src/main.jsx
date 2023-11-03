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
import EDITE from './components/edite'
import Inclpedido from "./components/inclpedido";
import Inclpedido2 from "./components/inclpedido2";
import Inclpedido3 from "./components/inclpedido3";
import Enviarpedido from "./components/enviarpedido";
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
    path: "Edite",
    element: <EDITE/>
  },

  {
    path:'incli1',
    element:<Inclpedido/>
  },
  {
    path:'incli2',
    element:<Inclpedido2/>
  },
  {
    path:'incli3',
    element:<Inclpedido3/>
  },
  {
    path:'enviarpedido',
    element:<Enviarpedido/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
