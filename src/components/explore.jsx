import { Link } from "react-router-dom";

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
          <div className="c1-pic"></div>
          <div className="c1-title">
            <h3>Classic Masala Chai</h3>
          </div>
        </div>
        <div className="c2">
          <div className="c2-pic"></div>
          <div className="c2-title">
            <h3>Ginger Jaggery Chai</h3>
          </div>
        </div>
        <div className="c3">
          <div className="c3-pic"></div>
          <div className="c3-title">
            <h3>Saffron Cardamom</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;