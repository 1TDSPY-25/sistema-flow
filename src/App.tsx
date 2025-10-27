import { Outlet } from "react-router-dom"
import { Cabecalho } from "./Components/Cabecalho/Cabecalho"
import { Rodape } from "./Components/Rodape/Rodape"
import { useTheme } from "./context/usetheme";

function App() {
  const { isDark } =  useTheme();
  return (
    <div className={`${isDark ? 'dark-theme': 'light-theme'} min-h-screen flex flex-col w-full h-full justify-between`}>
      <Cabecalho/>
          <Outlet/>
      <Rodape/>
    </div>
  )
}

export default App
