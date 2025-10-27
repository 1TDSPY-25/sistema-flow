import { Link } from "react-router-dom";
import MenuHamburger from "../MenuHamburguer/MenuHamburguer";

export function Menu() {
  return (
    
    <nav>
      <MenuHamburger/>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastro</Link>
    </nav>
  );
}
