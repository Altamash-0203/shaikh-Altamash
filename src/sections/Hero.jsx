import profilePic from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="about"
      className=" p-10 mt-10 pt-24 pb-12 flex items-center justify-center"
    >
      <div className=" mx-auto px-6 w-full flex flex-col md:flex-row items-center md:justify-evenly">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start w-full md:w-auto mb-6 md:mb-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Hi, I'm <span className="text-indigo-600">Shaikh Altamash</span>
          </h1>

          <p className=" mt-4 text-white font-medium ">
            Passionate Full Stack Web Developer with a strong focus on building
            interactive and efficient web applications. I work on both front-end
            and back-end development, ensuring fluent user experiences with
            great functionalities. Proficient in React.js, Node.js, Express, and
            MongoDB, I specialize in state management, API integration, and
            database design. I am committed to scalable, secure, and
            user-centric solutions that blend performance with outstanding
            design.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
