import React, { useState } from 'react';
import { IoClose, IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

interface LoginModalProps {
  onClose: () => void;
  onNavigateToRegister: () => void;
}

export function LoginModal({ onClose, onNavigateToRegister }: LoginModalProps) {
  
  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      
      {}
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl md:p-8">
        
        {}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
          aria-label="Fechar modal"
        >
          <IoClose />
        </button>

        {}
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Entrar com e-mail e senha
        </h2>
        
        {}
        <form onSubmit={(e) => e.preventDefault()}>
          
          {}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Digite seu email"
              className="w-full rounded-md border border-gray-300 p-3 text-gray-700 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          {}
          <div className="relative mb-4"> 
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha"
              className="w-full rounded-md border border-gray-300 p-3 text-gray-700 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            {}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-gray-500"
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </div>

          {}
          <button
            type="submit"
            className="w-full rounded-md bg-green-600 p-3 font-bold text-white transition-colors hover:bg-green-700"
          >
            ENTRAR
          </button>
          
        </form>
        
        {}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Esqueceu ou não possui senha?{' '}
            <a href="#" className=""> {}
              clique aqui
            </a>
          </p>
          {}
        </div>

      </div>

    </div>
  );
}