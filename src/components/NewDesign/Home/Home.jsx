"use client";

import "./home.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
            Plan Your Trip With Travel Super Tours
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Travel to your favorite city with respectful of the environment!
          </p>

          <button data-aos="fade-up" data-aos-duration="3000" className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="originDiv"
          >
            <input type="text" placeholder="Origin Location" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="destinationDiv"
          >
            <input type="text" placeholder="Destination Location" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="originDate"
          >
            <input type="date" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="3500"
            className="destinationDate"
          >
            <input type="date" />
          </div>
          <button data-aos="fade-left" data-aos-duration="2000" className="btn">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};
export default Home;
