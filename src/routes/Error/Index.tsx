// Error.tsx
import React from 'react';


const Error: React.FC = () => {

    document.title = "404 - Página Não Encontrada"; 

    return(
        <main className="error-container"> 
            <h1 className="error-code">404</h1> 
            <p className="error-message">Página não encontrada.</p> {/* Mensagem simplificada */}
            <a href="/" className="home-link">Voltar para o Início</a> 
        </main>
    );
};

export default Error;