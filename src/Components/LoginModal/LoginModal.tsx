import React, { useState } from 'react';
import { IoClose, IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

interface LoginModalProps {
  onClose: () => void;
  onNavigateToRegister: () => void;
}

export function LoginModal({ onClose, onNavigateToRegister }: LoginModalProps) {
  
  // Estado para controlar a visibilidade da senha
  const [showPassword, setShowPassword] = useState(false);

  return (
    // Fundo escurecido (overlay)
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      
      {/* O card/pop-up principal */}
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl md:p-8">
        
        {/* Botão de Fechar (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
          aria-label="Fechar modal"
        >
          <IoClose />
        </button>

        {/* Título */}
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Entrar com e-mail e senha
        </h2>
        
        {/* Formulário */}
        <form onSubmit={(e) => e.preventDefault()}>
          
          {/* Campo de Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Digite seu email"
              className="w-full rounded-md border border-gray-300 p-3 text-gray-700 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          {/* Campo de Senha */}
          <div className="relative mb-4"> 
            <input
              type={showPassword ? 'text' : 'password'} // <-- PASSO 15: MUDANÇA 1
              placeholder="Digite sua senha"
              className="w-full rounded-md border border-gray-300 p-3 text-gray-700 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            {/* Ícone de olho para mostrar/esconder senha */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // <-- PASSO 15: MUDANÇA 2
              className="" // A estilização virá em um passo futuro
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />} {/* <-- PASSO 15: MUDANÇA 3 */}
            </button>
          </div>

        </form>
        {/* O restante do formulário (botão) virá aqui */}

      </div>

    </div>
  );
}