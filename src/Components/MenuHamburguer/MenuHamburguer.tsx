import { useState } from 'react';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Ícone do hambúrguer */}
      <div
        className="flex flex-col justify-between items-center w-8 h-6 cursor-pointer z-10"
        onClick={toggleMenu}
      >
        <div
          className={`w-full h-1 bg-green-600 rounded-sm transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></div>
        <div
          className={`w-full h-1 bg-green-600 rounded-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></div>
        <div
          className={`w-full h-1 bg-green-600 rounded-sm transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></div>
      </div>

      {/* Menu de navegação */}
      <nav
        className={`absolute top-10 right-0 bg-white w-40 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
        }}
      >
        <ul className="space-y-4">
          <li>
            <a href="#home" className="text-green-700 hover:text-green-900 transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-green-700 hover:text-green-900 transition-colors duration-200">
              Serviços
            </a>
          </li>
          <li>
            <a href="#about" className="text-green-700 hover:text-green-900 transition-colors duration-200">
              Sobre
            </a>
          </li>
          <li>
            <a href="#contact" className="text-green-700 hover:text-green-900 transition-colors duration-200">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
