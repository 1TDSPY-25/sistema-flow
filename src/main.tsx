import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "../globals.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Index.tsx'
import Cadastro from './routes/Cadastro/Index.tsx'
import Error from './routes/Error/Index.tsx'
import Login from './routes/Login/Index.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

const router = createBrowserRouter([
  {
    path:"/", element: <App/>, errorElement: <Error/>, children:[
     {path:"/", element: <Home/>},
     {path:"/login", element: <Login/>},
     {path:"/cadastro", element: <Cadastro/>}
    ]     
  }
],{basename: "/sistema-flow"})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<<<<<<< HEAD
    <Suspense fallback={<div>Carregando...</div>}>
      <RouterProvider router={router} />
    </Suspense>
=======
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
>>>>>>> 69ad8f04ffc3a59c65b25efe22bc589e1d4fa3c5
  </StrictMode>,
)