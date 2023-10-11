"use client";

import "./blog.css";

import { BsArrowRightShort } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Posts = [
  {
    id: 1,
    postImage: "/Assets/image(6).jpg",
    title: "Title post 1, let us travel!",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quod odio quibusdam fuga impedit? Laborum ea non ad harum magni!",
  },
  {
    id: 2,
    postImage: "/Assets/image(7).jpg",
    title: "Title post 2, let us travel!",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quod odio quibusdam fuga impedit? Laborum ea non ad harum magni!",
  },
  {
    id: 3,
    postImage: "/Assets/image(10).jpg",
    title: "Title post 3, let us travel!",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quod odio quibusdam fuga impedit? Laborum ea non ad harum magni!",
  },
];

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, fuga!
          </p>
        </div>

        <div className="mainContainer grid">
          {Posts.map(({ id, postImage, title, body }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="singlePost grid"
                key={id}
              >
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>
                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">
                    {title}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="3500">
                    {body}
                  </p>
                </div>
                <a
                  href="#"
                  className="flex"
                  data-aos="fade-up"
                  data-aos-duration="4000"
                >
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Blog;
