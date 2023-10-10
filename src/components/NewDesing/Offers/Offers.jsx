import "./offers.css";

import { MdOutlineLocalMovies } from "react-icons/md";
import { MdGpsFixed } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { ImPowerCord } from "react-icons/im";
import { TbAirConditioning } from "react-icons/tb";

const Offers = () => {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, impedit.
          </p>
        </div>

        <div className="mainContent grid">
          <div className="singleOffer">
            <div className="destImage">
              <img
                src=""
                alt="Image Name"
              />
              <span className="discount">30% Off</span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>$1000</h4>
                <span className="status">For Rent</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offers;
