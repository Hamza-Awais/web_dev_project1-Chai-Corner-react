import logo from "../assets/logo.svg";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div id="F">
          <img src={logo} alt="Logo" />
          <h2>Chai Corner</h2>
        </div>
        <p>A quiet corner for thoughtfully brewed chai, warm conversations, and everyday pauses.</p>
      </div>
      <div id="address">
        <h3>Visit Us</h3>
        <ul>
          <li>14 Rosewood Lane, Jaipur</li>
          <li>+91 98765 43210</li>
          <li>hello@chaicorner.in</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Chai Corner. Brewed with care.</p>
      </div>
    </footer>
  );
}

export default Footer;