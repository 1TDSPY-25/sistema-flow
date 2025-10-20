import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "../globals.css"
import { createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home/Index.tsx'
import Cadastro from './routes/Cadastro/Index.tsx'
import Error from './routes/Error/Index.tsx'
import Login from './routes/Login/Index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const router = createBrowserRouter([
  {
    path:"/", element: <App/>, errorElement: <Error/>, children:[
     {path:"/", element: <Home/>},
     {path:"/login", element: <Login/>},
     {path:"/cadastro", element: <Cadastro/>}
    ]     
  }
])