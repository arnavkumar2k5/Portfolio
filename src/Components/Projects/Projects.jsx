import React from "react";

function Projects() {
  return (
    <div className="p-4 md:p-10 w-full mb-20 mt-[20rem] md:mt-0 md:mb-10" id="project">
      <h1 className="text-4xl md:text-7xl p-5 w-full font-bold border-b-2 md:border-none text-center">
        PROJECTS
      </h1>
      <div className="border-b border-gray-300 w-1/3 mx-auto mb-20"></div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-10">
        
        <div className="relative w-full md:w-[35rem] border-2 border-white rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-500 hover:rotate-3">
          <h1 className="text-2xl p-3 bg-yellow-400 w-full">Blog-project</h1>
          <img
            src="/Project/Project-7.png"
            alt="Project thumbnail"
            className="w-full md:h-full bg-gray-900 transition-transform duration-500 group-hover:scale-110"
          />
          <div className="md:absolute md:inset-0 bg-gray-900 bg-opacity-75 p-5 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-start">
            <p className="text-white mb-5 text-xl">
              Built a responsive blog site with React, Tailwind, Appwrite, Redux, and TinyMCE. Added a news carousel and category filtering.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/arnavkumar2k5/Blog-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
                  Github
                </button>
              </a>
              <a
                href="https://blog-project-jet-iota.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
                  Visit
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-[35rem] border-2 border-white rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-500 hover:rotate-3">
          <h1 className="text-2xl p-3 bg-yellow-400 w-full">CryptoNexus</h1>
          <img
            src="/Project/Project-2.png"
            alt="Project thumbnail"
            className="w-full md:h-full bg-gray-900 transition-transform duration-500 group-hover:scale-110"
          />
          <div className="md:absolute md:inset-0 bg-gray-900 bg-opacity-75 p-5 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-start">
            <p className="text-white mb-5 text-xl">
              Developed a responsive blog with React, Tailwind, Appwrite, Redux, and TinyMCE. Added a news carousel and category filtering.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/arnavkumar2k5/CryptoNexus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
                  Github
                </button>
              </a>
              <a
                href="https://crypto-nexus-azure.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
                  Visit
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-[35rem] border-2 border-white rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-500 hover:rotate-3">
          <h1 className="text-2xl p-3 bg-yellow-400 w-full">Lorem</h1>
          <img
            src="/Project/Project-3.png"
            alt="Project thumbnail"
            className="w-full md:h-full bg-gray-900 transition-transform duration-500 group-hover:scale-110"
          />
          <div className="md:absolute md:inset-0 bg-gray-900 bg-opacity-75 p-5 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-start">
            <p className="text-white mb-5 text-xl">
            This portfolio website is built using React.js, Tailwind CSS, js, tsparticles, and is made to showcases my personal projects, and contact details in a visually appealing and responsive layout, ensuring an optimal user experience across all devices.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/arnavkumar2k5/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
                  Github
                </button>
              </a>
              <a
                href="https://portfolio-six-gray-62.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
                  Visit
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
