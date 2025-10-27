<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import { Cabecalho } from "./Components/Cabecalho/Cabecalho";
import { Rodape } from "./Components/Rodape/Rodape";



=======
import { Outlet } from "react-router-dom"
import { Cabecalho } from "./Components/Cabecalho/Cabecalho"
import { Rodape } from "./Components/Rodape/Rodape"
import { useTheme } from "./context/usetheme";
>>>>>>> 69ad8f04ffc3a59c65b25efe22bc589e1d4fa3c5

function App() {
  const { isDark } =  useTheme();
  return (
<<<<<<< HEAD
    <>
      <Cabecalho />
        <Outlet />
      <Rodape />
    </>
=======
    <div className={`${isDark ? 'dark-theme': 'light-theme'} min-h-screen flex flex-col w-full h-full justify-between`}>
      <Cabecalho/>
          <Outlet/>
      <Rodape/>
    </div>
>>>>>>> 69ad8f04ffc3a59c65b25efe22bc589e1d4fa3c5
  )
}

export default App
