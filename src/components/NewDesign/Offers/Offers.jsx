"use client";

import "./offers.css";

import { MdOutlineLocalMovies } from "react-icons/md";
import { MdGpsFixed } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { ImPowerCord } from "react-icons/im";
import { TbAirConditioning } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { BsArrowRightShort } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const offers = [
  {
    id: 1,
    imgSrc: "/Assets/image(3).jpg",
    destTitle: "Fort Lauderdale",
    location: "Pompano Beach",
    price: "54.99",
  },
  {
    id: 2,
    imgSrc: "/Assets/fort-pierce.jpg",
    destTitle: "Fort Pierce",
    location: "Port St.Lucie",
    price: "48.99",
  },
  {
    id: 3,
    imgSrc: "/Assets/west-palm-beach.jpg",
    destTitle: "West Palm Beach",
    location: "West Florida",
    price: "56.99",
  },
];

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, impedit.
          </p>
        </div>

        <div className="mainContent grid">
          {offers.map(({ id, imgSrc, destTitle, location, price }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="singleOffer"
                key={id}
              >
                <div className="destImage">
                  <img src={imgSrc} alt={destTitle} />
                  <span className="discount">30% Off</span>
                </div>

                <div className="offerBody">
                  <div className="price flex">
                    <h4>${price}</h4>
                    <span className="status">Single Tour</span>
                  </div>

                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdOutlineLocalMovies className="icon" />
                      <small>Movies On Board</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdGpsFixed className="icon" />
                      <small>GPS System</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small>Wi-Fi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <ImPowerCord className="icon" />
                      <small>Power Equipped</small>
                    </div>
                    <div className="singleAmenity flex">
                      <TbAirConditioning className="icon" />
                      <small>Air Conditioned</small>
                    </div>
                  </div>

                  <div className="location flex">
                    <GrMapLocation className="icon" />
                    <small> {location}</small>
                  </div>
                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Offers;
