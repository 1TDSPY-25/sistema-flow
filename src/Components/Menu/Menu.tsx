import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastro</Link>
    </nav>
  );
}
