import React from "react";

function Contact() {
  return (
    <div id="contact" className="bg-[#D1D5DB] p-5 md:p-20 min-h-screen flex items-center justify-center">
      <div className="border-2 rounded-3xl md:border-black w-full md:w-4/5 lg:w-3/4 xl:w-2/3 m-auto bg-white shadow-2xl">
        <div className="m-5 md:m-10 text-center">
          <h1 className="text-black text-3xl md:text-5xl lg:text-7xl font-bold mb-4">Contact</h1>
          <p className="text-base md:text-lg text-gray-600 mb-8">Feel free to reach out!</p>
          <div className="border-b border-gray-300 w-1/3 mx-auto mb-6"></div>
        </div>
        <div className="flex flex-col md:flex-row p-5 md:p-8 gap-6 md:gap-10">
          <div className="w-full md:w-1/2 flex flex-col space-y-4 md:space-y-6">
            <a
              href="mailto:arnavkumar2k5@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow transition-transform transform hover:scale-105"
            >
              <img src="/Contact/mail.png" alt="mail" className="h-12 md:h-16" />
              <p className="text-sm md:text-lg text-gray-700">arnavkumar2k5@gmail.com</p>
            </a>
            <a
              href="https://github.com/arnavkumar2k5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow transition-transform transform hover:scale-105"
            >
              <img src="/Contact/github.png" alt="github" className="h-12 md:h-16" />
              <p className="text-sm md:text-lg text-gray-700">GitHub</p>
            </a>
            <a
              href="https://x.com/Arnav_2k5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow transition-transform transform hover:scale-105"
            >
              <img src="/Contact/twitter.png" alt="twitter" className="h-12 md:h-16" />
              <p className="text-sm md:text-lg text-gray-700">X.com</p>
            </a>
            <a
              href="https://www.linkedin.com/in/arnav-kumar-55a0a6276/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow transition-transform transform hover:scale-105"
            >
              <img src="/Contact/linkedin.png" className="h-12 md:h-16" alt="linkedin" />
              <p className="text-sm md:text-lg text-gray-700">LinkedIn</p>
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center m-auto mt-6 md:mt-0">
            <div className="bg-yellow-400 rounded-full overflow-hidden shadow-lg transform transition-transform duration-300 hover:rotate-3 hover:scale-105">
              <img
                src="/profile/profile-1.png"
                alt="Profile"
                className="h-[30vh] md:h-[50vh] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
