import React from "react";
import sanchar from "../assets/sanchar.png";
import anpr from "../assets/anpr.png";
import cc from "../assets/cc.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: sanchar,
      title: "Sanchar Project",
      desc: [
        "A pilot project done with support of the Nepal Red Cross Society and the International Federation of Red Cross and Red Crescent Socities. Simple website where you can fetch the news and ",
      ],
      code:
        "https://github.com/pratima-dawadi",
    },
    {
      id: 2,
      src: anpr,
      title: "Automatic License Plate Detection using YOLO",
      desc: [
        "Recognize license plates with prior orientation knowledge for the letters and digits.",
      ],
      code:
        "https://github.com/pratima-dawadi/Automatic-License-Plate-Detection.git",
    },
    {
      id: 3,
      src: cc,
      title: "Movie Revie System",
      desc: [
        "Store information of different movies and series and generate data whenever asked by the users and also save it as per the need of user. It allows to add movies and series of their own and give review and ratings too. It also displays ratings and comments on the movies or series on the bottom of that also views the most top rated movies and series which makes the user easy to make choice of movies and series.",

      ],
      code: "https://github.com/pratima-dawadi/Cinephile-Choose.git",

    },
  ];
  return (
    <>
      <div className="container py-5">
        <div className="text-center">
          <h1 className="fw-bold">Projects</h1>
          <p className="fw-light pt-2 text-uppercase">
            Some of my recent projects
          </p>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-10 mx-auto">
            {projects.map(
              ({ id, src, title, code, desc }) => (
                <div
                  key={id}
                  className="row mt-5 p-3 rounded shadow d-flex justify-content-center align-items-center"
                >
                  <div className="col-md-12 col-lg-6 image-container">
                    <div className="image-wrapper">
                      <img className="img-fluid rounded " src={src} alt="" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="p-4">
                      <h4 className="pb-2 fw-semibold">{title}</h4>
                      {desc.map((des, index) => (
                        <span className="fw-light d-block pt-2" key={index}>
                          <BsLightningChargeFill className="text-warning me-1" />
                          {des}
                        </span>
                      ))}
                      <div className="pt-4">
                        <a
                          href={code}
                          target="_blank"
                          className="text-decoration-none fw-bold codeLink"
                        >
                          Code <FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
