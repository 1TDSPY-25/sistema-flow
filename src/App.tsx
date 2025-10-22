import { Outlet } from "react-router-dom";
import { Cabecalho } from "./Components/Cabecalho/Cabecalho";
import { Rodape } from "./Components/Rodape/Rodape";




function App() {
  return (
    <>
      <Cabecalho />
        <Outlet />
      <Rodape />
    </>
  )
}

export default App
