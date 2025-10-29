import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav
      className="
        flex items-center justify-center gap-8 
        px-6 py-3 
        bg-white shadow-sm rounded-lg 
        text-sm font-medium
      "
    >
      <Link
        to="/"
        className="
          text-gray-700 font-semibold 
          hover:text-red-600 hover:underline underline-offset-4 
          transition duration-200
        "
      >
        Home
      </Link>

      <Link
        to="/cadastro"
        className="
          text-gray-700 font-semibold 
          hover:text-red-600 hover:underline underline-offset-4 
          transition duration-200
        "
      >
        Cadastro
      </Link>

     
      <Link
        to="/login"
        className="
          text-gray-700 font-semibold 
          hover:text-red-600 hover:underline underline-offset-4 
          transition duration-200
        "
      >
        Login
      </Link>
    </nav>
  );
}
