import React from "react";
import developer from "../assets/developer.json";
import animation from "../assets/animation.json";
import coding from "../assets/coding.json";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import {
  FaFacebook,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Container className="pb-5 fw-light" id="home">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-5 col-md-12">
            <div>
              <h5 className="fw-normal">
              Welcome to my Portfolio
              </h5>
              <h1 className="fw-bold display-4 name-design">
                PRATIMA DAWADI
                <img
                  width="40"
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif"
                  alt="✨"
                ></img>
              </h1>
              <h3 className="fw-semibold d-flex">
                {/* <span className="me-2">I'm a</span> */}
                <span className="text-color">
                  <Typewriter
                    options={{
                      strings: [
                        "Web Developer",
                        "AI/ML Enthusiast",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h3>
            </div>
            <div>
              <a
                href="https://www.facebook.com/pratima.dawadi.12/"
                rel="noreferrer"
                target="_blank"
                className="fs-2 text-primary me-3"
              >
                <FaFacebook />
              </a>
              <a
                href="mailto:dawadipratima72@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="fs-2 text-danger me-3"
              >
                <SiGmail />
              </a>
              <a
                href="https://www.linkedin.com/in/pratima-dawadi-947890210/"
                rel="noreferrer"
                target="_blank"
                className="fs-2 text-linkedin me-3"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/pratima-dawadi"
                rel="noreferrer"
                target="_blank"
                className="fs-2 text-dark"
              >
                <FiGithub />
              </a>
            </div>
            <div>
              <button className="button-resume fw-bold btn rounded-0 mt-4">
                <a
                  className="text-decoration-none"
                  href="./public/Pratima_Dawadi(CV).pdf"
                  download={true}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFileDownload className="me-1" />
                  Resume
                </a>
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div>
              <Lottie animationData={coding} loop={true} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
