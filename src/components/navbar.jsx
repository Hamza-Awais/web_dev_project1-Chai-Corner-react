import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./navbar.css";

function Navbar() 
{
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <h1>CHAI CORNR</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;