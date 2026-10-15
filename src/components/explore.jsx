import { Link } from "react-router-dom";
import c1Img from "../assets/c1.png";
import c2Img from "../assets/c2.png";
import c3Img from "../assets/c3.png";

function Explore() {
  return (
    <section className="explore-sec">
      <div className="explore-text">
        <p>Guest favourites</p>
        <h1>Popular Chai</h1>
        <Link to="/menu" className="epbtn">view menu &rarr;</Link>
      </div>
      <div className="cards">
        <div className="c1">
          <div className="c1-pic"><img src={c1Img} alt="Classic Masala Chai" /></div>
          <div className="c1-title">
            <h3>Classic Masala Chai</h3>
            <span>Rs 90</span>
          </div>
        </div>
        <div className="c2">
          <div className="c2-pic"><img src={c2Img} alt="Ginger Jaggery Chai" /></div>
          <div className="c2-title">
            <h3>Ginger Jaggery Chai</h3>
            <span>Rs 110</span>
          </div>
        </div>
        <div className="c3">
          <div className="c3-pic"><img src={c3Img} alt="Saffron Cardamom" /></div>
          <div className="c3-title">
            <h3>Saffron Cardamom</h3>
            <span>Rs 140</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;