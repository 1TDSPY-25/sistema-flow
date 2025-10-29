import React from 'react';

interface LoginModalProps {
  onClose: () => void;
  onNavigateToRegister: () => void;
}

export function LoginModal({ onClose, onNavigateToRegister }: LoginModalProps) {
  
  return (
    // Fundo escurecido (overlay)
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      
      {/* O card/pop-up principal */}
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl md:p-8">
        
        {/* O título e o formulário virão aqui dentro */}
        Eu sou o card branco

      </div>

    </div>
  );
}