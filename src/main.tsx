import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "../globals.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/index.tsx";


import { ThemeProvider } from "./context/ThemeContext.tsx";
import Error from "./routes/Error/index.tsx";
import Login from "./routes/Login/index.tsx";
import Cadastro from "./routes/Cadastro/index.tsx";



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login/>},
        { path: "/cadastro", element: <Cadastro /> },
      ],
    },
  ],
  { basename: "/sistema-flow" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Suspense fallback={<div>Carregando...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  </StrictMode>
);
