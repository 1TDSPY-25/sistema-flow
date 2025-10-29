import React from 'react';
import { IoClose } from 'react-icons/io5';

interface LoginModalProps {
  onClose: () => void;
  onNavigateToRegister: () => void;
}

export function LoginModal({ onClose, onNavigateToRegister }: LoginModalProps) {
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl md:p-8">
        
        <button
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
          aria-label="Fechar modal"
        >
          <IoClose />
        </button>

        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Entrar com e-mail e senha
        </h2>

      </div>

    </div>
  );
}