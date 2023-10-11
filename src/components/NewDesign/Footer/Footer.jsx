"use client";

import "./footer.css";

import { PiBusFill } from "react-icons/pi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="footerLogo"
          >
            <a href="#" className="logo flex">
              <h1 className="flex">
                <PiBusFill className="icon" />
                SuperTours
              </h1>
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="socials flex"
          >
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="footerLinks"
        >
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Trip & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3500"
          className="footerLinks"
        >
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          className="footerLinks"
        >
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+407 370 3001</span>
          <span className="phone">+305 677 2676</span>
          <span className="email">reservations@supertours.com</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;

{
  /* <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Trip & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li></> */
}
