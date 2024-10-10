import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1A1A1E] text-gray-300 py-12 px-6 w-screen">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        
        <div className="mb-8 md:mb-0 w-full md:w-2/6 pl-5 pt-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-start text-white">Arnav's Portfolio</h2>
          <p className="mt-5 text-gray-400 m-auto text-xl text-justify md:text-2xl md:pr-32"> 
            Thank you for visiting my portfolio. Let's connect on social media.
          </p>
          <p className="mt-5 text-gray-400 text-start text-xl md:text-2xl">
            Keep rising 🚀. Connect with me over live chat!
          </p>
        </div>

        <div className="mb-8 md:mb-0 w-full md:w-2/6 pl-5 pt-5">
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-start">Quick Links</h3>
          <ul className="mt-5 space-y-2 text-start text-xl md:text-2xl">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                ➤ Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white transition-colors">
                ➤ About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white transition-colors">
                ➤ Skills
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white transition-colors">
                ➤ Education
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white transition-colors">
                ➤ Work
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white transition-colors">
                ➤ Experience
              </a>
            </li>
          </ul>
        </div>

        
        <div className="w-full md:w-2/6">
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-start md:text-center">Contact Info</h3>
          <div className="flex flex-col m-auto">
            <a
              href="mailto:arnavkumar2k5@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 transition-transform transform hover:scale-105"
            >
              <img src="/Contact/mail.png" alt="mail" className="h-10 md:h-16" />
              <p className="md:text-lg text-white text-sm">arnavkumar2k5@gmail.com</p>
            </a>
            <a
              href="https://github.com/arnavkumar2k5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 transition-transform transform hover:scale-105"
            >
              <img src="/Contact/github.png" alt="github" className="h-10 md:h-16" />
              <p className="md:text-lg text-white text-sm">GitHub</p>
            </a>
            <a
              href="https://x.com/Arnav_2k5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 transition-transform transform hover:scale-105"
            >
              <img src="/Contact/twitter.png" alt="twitter" className="h-10 md:h-16" />
              <p className="md:text-lg text-white text-sm">X.com</p>
            </a>
            <a
              href="https://www.linkedin.com/in/arnav-kumar-55a0a6276/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 transition-transform transform hover:scale-105"
            >
              <img
                src="/Contact/linkedin.png"
                className="h-10 md:h-16"
                alt="linkedin"
              />
              <p className="md:text-lg text-white text-sm">LinkedIn</p>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xl text-gray-400">
        <p>
          Designed with ❤️ by <span className="text-orange-400">Arnav Kumar</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

