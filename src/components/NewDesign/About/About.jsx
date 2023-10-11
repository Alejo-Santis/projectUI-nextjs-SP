"use client";

import "./about.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">Why Super Tours?</h2>

        <div className="mainContent container grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem"
          >
            <img src="/Assets/tours.png" alt="Image Name" />
            <h3>The Best Way To Book Ground Transportion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis voluptatibus ut eius soluta quia, alias quis quam
              deleniti omnis laboriosam.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleItem"
          >
            <img src="/Assets/beach.png" alt="Image Name" />
            <h3>Many Tourist Sites</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis voluptatibus ut eius soluta quia, alias quis quam
              deleniti omnis laboriosam.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleItem"
          >
            <img src="/Assets/customer.png" alt="Image Name" />
            <h3>500+ Customer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis voluptatibus ut eius soluta quia, alias quis quam
              deleniti omnis laboriosam.
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="cardText"
            >
              <h2>Wonderful Trip experience in there!</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                ullam reprehenderit iure aperiam nesciunt nulla.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="cardVideo"
            >
              <video
                src="/Assets/video.mp4"
                autoPlay
                loop
                muted
                type="video/mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
