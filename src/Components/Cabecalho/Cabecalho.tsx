import { Menu } from "../Menu/Menu";
import { useTheme } from "@/context/usetheme";
import logoImage from "@/assets/img/cabecalho/image.png";

export function Cabecalho() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header
      className={`${isDark ? "dark-theme bg-gray-900" : "light-theme bg-white"} 
      shadow-md w-full px-8 py-3 sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="flex items-center justify-between gap-8">
        
        {/* 🩺 Logo à esquerda */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img
            src={logoImage}
            alt="Farmácia Flow Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* 📋 Menu + Barra de busca centralizados */}
        <div className="flex items-center justify-center flex-1 gap-10">
          
          {/* Menu */}
          <Menu />

          {/* Barra de pesquisa branca */}
          <div className="relative flex items-center w-80 md:w-96 border border-red-500 rounded-full overflow-hidden shadow-sm bg-white">
            <input
              type="text"
              placeholder="O que você procura hoje?"
              className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white dark:bg-white focus:outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white p-2 flex items-center justify-center w-10 transition">
              🔍
            </button>
          </div>
        </div>

        {/* 🌙 Botão de alternar tema à direita */}
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full cursor-pointer text-2xl text-red-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-150"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}
