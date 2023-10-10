import "./popular.css";

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

const Data = [
  {
    id: 1,
    imgSrc: "/Assets/image1.jpg",
    destTitle: "Walt Disney World",
    location: "Orlando",
    grade: "Entertainment Trip",
  },
  {
    id: 2,
    imgSrc: "/Assets/image(2).jpg",
    destTitle: "Universal Studios",
    location: "Florida",
    grade: "Entertainment Trip",
  },
  {
    id: 3,
    imgSrc: "/Assets/image(5).jpg",
    destTitle: "North Miami Beach",
    location: "Florida",
    grade: "Entertainment Trip",
  },
  ,
  {
    id: 4,
    imgSrc: "/Assets/image(4).jpg",
    destTitle: "Hollywood",
    location: "Florida",
    grade: "Entertainment Trip",
  },
];

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              voluptates iste optio fuga, laborum eligendi?
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon " />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div
                className="singleDestination"
                key={id}
              >
                <div className="destImage">
                  <img
                    src={imgSrc}
                    alt="Image Title"
                  />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className="icon " />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      SuperTours
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Popular;
