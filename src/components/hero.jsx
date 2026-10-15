import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="tagline">A little warmth in every pour</p>
        <h1>Chai Corner</h1>
        <p>Sip the warmth,<br />one cup at a time.</p>
        <Link to="/menu" className="btn">view menu &rarr;</Link>
      </div>
    </section>
  );
}

export default Hero;