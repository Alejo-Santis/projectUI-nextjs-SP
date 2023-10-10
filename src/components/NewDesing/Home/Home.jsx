import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Plan Your Trip With Travel Super Tours</h1>

          <p className="subTitle">
            Travel to your favorite city with respectful of the environment!
          </p>

          <button className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="originDiv">
            <label htmlFor="origin">Origin</label>
            <input
              type="text"
              placeholder="Origin Location"
            />
          </div>
          <div className="destinationDiv">
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              placeholder="Destination Location"
            />
          </div>
          <div className="originDate">
            <input type="date" />
          </div>
          <div className="destinationDate">
            <input type="date" />
          </div>
          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
};
export default Home;
