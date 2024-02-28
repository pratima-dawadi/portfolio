import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import { BsLightningChargeFill } from "react-icons/bs";
import animation from "../assets/animation.json";
import Lottie from "lottie-react";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      scroll: "zoom-in-down",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: bootstrap,
      title: "Bootstrap",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 6,
      src: react,
      title: "React",
    },
  ];
  return (
    <>
      <div className="container py-5" id="about">
        <div className="text-center">
          <h1 className="fw-bold">What I do??</h1>
          <p className="fw-light pt-2">
            A WEB DEVELOPER
          </p>
        </div>
        <div className="row pt-5 g-4 d-flex justify-content-center align-items-center">
          <div className="col-12 col-lg-4">
            <Lottie className="img-fluid" animationData={animation} loop={true} />
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="pb-3 fw-normal">Web Development</h3>
            <div className="d-flex flex-wrap gap-2">
              {techs.map(({ id, src, title }) => (
                <div className="shadow rounded-circle p-2" key={id} title={title}>
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
            <div className="pt-5">
              <p className="fw-light">
                <BsLightningChargeFill className="text-warning me-1" />
                Programming Languages: C, C++, C#, Python, HTML , CSS and Javascript, React js
              </p>
              <p className="fw-light">
                <BsLightningChargeFill className="text-warning me-1" />
                Django python framework
              </p>
              <p className="fw-light">
                <BsLightningChargeFill className="text-warning me-1" />
                AI/ML-Beginner
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
