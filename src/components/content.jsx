import contentImg from "../assets/content.png";

function Content() {
  return (
    <section className="content">
      <div className="content-text">
        <p>Our story</p>
        <h1>Made slowly.<br />Shared warmly.</h1>
        <p>
          We started Chai Corner with a simple belief: the best conversations
          begin over a well-made cup of tea. Our chai is brewed to order with
          whole spices, local milk, and recipes inspired by homes across
          India. Come for your morning ritual, stay for the unhurried
          atmosphere.
        </p>
      </div>
      <div className="content-image">
        <img src={contentImg} alt="Chai Corner" />
      </div>
    </section>
  );
}

export default Content;