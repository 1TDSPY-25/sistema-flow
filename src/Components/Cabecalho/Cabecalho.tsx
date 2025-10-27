import { Menu } from "../Menu/Menu";
import { useTheme } from "@/context/usetheme";

export function Cabecalho() {

  const { isDark, toggleTheme } =  useTheme();

  return (
    <header className={`${isDark ? 'dark-theme': 'light-theme'} flex items-center justify-around  shadow-md w-full h-32`}>
      <h1 className="text-2xl font-bold">Sistema Flow</h1>
      <Menu />

      <button
        onClick={toggleTheme}
        className="ml-4 p-2 rounded cursor-pointer"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </header>
  );
}
