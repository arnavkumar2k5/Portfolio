import React from "react";
import Carousel from "../Carousel/Carousel";

function About() {
  return (
    <div id="about" className="relative bg-[#D1D5DB] text-black py-10 px-6 lg:py-20 lg:px-20">
      <div className="max-w-screen-xl m-auto">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black mb-10 md:mb-16 text-center">
          ABOUT <span className="text-purple-700">ME</span>
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:w-1/2 text-base md:text-lg lg:text-2xl leading-relaxed text-black">
            <p className="text-cyan-400 text-4xl md:text-5xl text-center lg:text-start">
              I'm Arnav Kumar
            </p>
            <p className="text-xl md:text-2xl mt-2 text-center lg:text-start">
              Full-Stack Developer
            </p>
            <p className="mt-4 mb-6 text-justify">
              I'm from New Delhi, India, and currently pursuing my B.Tech in Information Technology from Maharaja Surajmal Institute of Technology, New Delhi. As a passionate web developer, I'm on a journey to become the best version of myself. I've completed an internship and worked on several freelance projects, building everything from real-time chat applications to full-featured blog platforms. I love turning ideas into functional, user-friendly web experiences. If you enjoy my work, let’s team up and build something incredible!
            </p>
          </div>
          <div className="lg:w-1/2 p-5">
            <img
              src="/profile/profile-3.jpg"
              alt="Arnav Kumar"
              className="w-[80%] md:w-[60%] lg:w-[80%] m-auto rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105 md:grayscale hover:grayscale-0"
            />
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl p-5 lg:text-5xl font-bold text-center border-2 border-black text-black mb-8">
            SKILLSET
          </h3>
          <div className="flex justify-center mt-5 w-full">
            <Carousel/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
