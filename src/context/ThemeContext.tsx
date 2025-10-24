import type { ThemeContextType } from "@/types/themeContextType";
import { createContext, useState, type ReactNode } from "react";


// Criamos o bilhete mágico
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


// Aqui criamos a pessoa que vai dar o bilhete para todo mundo
export const ThemeProvider = ({children} : {children: ReactNode}) => {

      // Guardamos o estado da luz (se está escuro ou não)
        const [isDark, setIsDark] = useState(false);

     // Função para mudar o estado da luz
    const toggleTheme = () => {
        setIsDark((prevIsDark) => !prevIsDark);
    };

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;