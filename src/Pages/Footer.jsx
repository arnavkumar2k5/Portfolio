import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1A1A1E] text-gray-300 py-12 md:px-10 w-screen">
      <div className="flex flex-col md:flex-row justify-between mx-10 items-start gap-10">
        <div className="mb-8 md:mb-0 w-full md:w-2/6 pl-5 pt-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-start text-white">
            Arnav's Portfolio
          </h2>
          <p className="mt-5 text-gray-400 m-auto text-xl text-justify md:text-xl md:pr-32">
            Thank you for visiting my portfolio. Let's connect on social media.
          </p>
          <p className="mt-5 text-gray-400 text-start text-xl md:text-xl">
            Keep rising 🚀. Connect with me over live chat!
          </p>
        </div>

        <div className="w-full md:w-2/6">
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center md:ml-5">
            Contact Info
          </h3>
          <div className="flex flex-col md:flex-row m-auto justify-center">
            <a
              href="mailto:arnavkumar2k5@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center space-x-4 p-4 transition-transform transform hover:scale-105 group"
            >
              <img
                src="/Contact/mail.png"
                alt="mail"
                className="h-10 md:h-12"
              />
              <p className="md:text-lg text-white text-base md:hidden">arnavkumar2k5@gmail.com</p>
              <span className="absolute top-20 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                arnavkumar2k5@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/arnavkumar2k5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 transition-transform transform hover:scale-105 group"
            >
              <img
                src="/Contact/github.png"
                alt="github"
                className="h-10 md:h-12"
              />
              <p className="md:text-lg text-white text-base md:hidden">GitHub</p>
              <span className="absolute top-20 left-1/3 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                arnavkumar2k5
              </span>
            </a>
            <a
              href="https://x.com/Arnav_2k5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 transition-transform transform hover:scale-105 group"
            >
              <img
                src="/Contact/twitter.png"
                alt="twitter"
                className="h-10 md:h-12"
              />
              <p className="md:text-lg text-white text-base md:hidden">X.com</p>
              <span className="absolute top-20 left-1/3 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Arnav_2k5
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/arnav-kumar-55a0a6276/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 transition-transform transform hover:scale-105 group"
            >
              <img
                src="/Contact/linkedin.png"
                className="h-10 md:h-12"
                alt="linkedin"
              />
              <p className="md:text-lg text-white text-base md:hidden">LinkedIn</p>
              <span className="absolute top-20 left-1/3 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                https://www.linkedin.com/in/arnav-kumar-55a0a6276/
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xl text-gray-400">
        <p>
          Designed with ❤️ by <br className="md:hidden" />{" "}
          <span className="text-orange-400">Arnav Kumar</span>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} Arnav Kumar. All rights reserved.
          </p>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
