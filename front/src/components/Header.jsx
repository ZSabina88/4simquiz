import logo from "../assets/4simLogo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Dördüncü sənaye inqilabı mərkəzinin loqosu" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
      </div>
      <h1>4SIM BAKU.ID Quiz Trivia</h1>
    </header>
  );
}
