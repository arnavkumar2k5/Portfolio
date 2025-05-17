import React from "react";
import { Link } from "react-scroll";
import Design from "../Components/particles-effect/Design";
import Footer from "./Footer";
import Contact from "../Components/Contact/Contact";
import Projects from "../Components/Projects/Projects";
import About from "../Components/About/About";
import TypeEffect from "../Text/Text";

function Home() {
  return (
    <div className="w-screen h-screen text-center text-3xl items-center relative">
      <div
        className="flex flex-col lg:flex-row md:ml-20 items-center min-h-screen px-10 lg:px-20 py-20 mt-20 justify-between"
        id="/"
      >
        <div className="lg:w-1/2 text-center lg:text-left order-last lg:order-first z-10">
          <h1 className="text-4xl lg:text-7xl font-bold mb-4 text-cyan-400">
            Hi there!
          </h1>
          <h2 className="text-3xl lg:text-7xl font-semibold text-gray-200 md:mb-6">
            I'm Arnav Kumar
          </h2>
          <div className=" bg-cyan-500 border-b border-gray-300 w-[90%] mx-auto md:mx-0 mt-5 mb-5"></div>
          <div className="h-32 text-2xl w-screen md:text-4xl font-bold text-white">
            <TypeEffect />
          </div>
          <div className="flex gap-5 mb-10 justify-center md:justify-start">
            <div className="bg-yellow-400 hover:bg-orange-500 text-xl md:text-4xl p-2 md:p-5 rounded-full hover:cursor-pointer">
              <Link to="about" smooth={true} duration={500}>
                About Me
              </Link>
            </div>
            <div className="bg-yellow-400 hover:bg-orange-500 text-xl md:text-4xl p-2 md:p-5 rounded-full hover:cursor-pointer">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </div>
          </div>
          <div className="flex gap-5 md:gap-10 justify-center md:justify-start">
            <a
              href="arnavkumar2k5@gmail.com"
              target="_blank"
              className="hover:cursor-pointer transition-transform transform hover:scale-110"
            >
              <img
                src="/Contact/mail.png"
                alt="mail"
                className="h-12 md:h-16"
              />
            </a>
            <a
              href="https://github.com/arnavkumar2k5"
              target="_blank"
              className="hover:cursor-pointer transition-transform transform hover:scale-110"
            >
              <img
                src="/Contact/github.png"
                alt="github"
                className="h-12 md:h-16"
              />
            </a>
            <a
              href="https://x.com/Arnav_2k5"
              target="_blank"
              className="hover:cursor-pointer transition-transform transform hover:scale-110"
            >
              <img
                src="/Contact/twitter.png"
                alt="twitter"
                className="h-12 md:h-16"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/arnav-kumar-55a0a6276/"
              target="_blank"
              className="hover:cursor-pointer transition-transform transform hover:scale-110"
            >
              <img
                src="/Contact/linkedin.png"
                className="h-12 md:h-16"
                alt="linkedin"
              />
            </a>
          </div>
        </div>

        <div className="md:bg-yellow-400 rounded-full m-auto shadow-xl order-first mb-10 md:m-0 lg:order-last z-10 transform transition-transform duration-300 hover:rotate-3 hover:scale-105">
          <img
            src="/profile/profile-2.png"
            alt="profile"
            className="md:h-[60vh] rounded-full shadow-lg w-full"
          />
        </div>
      </div>

      <div className="h-auto">
        <About />
      </div>

      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>

      <div className="w-full h-screen absolute top-0 left-0">
        <Design />
      </div>
    </div>
  );
}

export default Home;
