function Projects() {
  const projects = [
    {
      title: "Homezy",
      link: "https://sweet-meringue-710bd4.netlify.app/",
      repo:"https://github.com/Altamash-0203/Homezy-Homes-made-easy",
      img: "/HomzyLogo.png",
      desc: "A full-stack web application where users can list, browse, and manage properties. It includes authentication, image uploads, and advanced search filters for homes, flats, and rental properties.",
      tech: ["REACT", "NODE.JS", "EXPRESS", "MONGODB", "TAILWIND CSS"],
      type: "Individual Project",
    },
    {
      title: "MessMate",
      link: "https://messmate-the-food-you-deserve.netlify.app/",
      repo:"https://github.com/Altamash-0203/MessMate-The-Food-You-Deserve",
      img: "/logo.svg",
      desc: "A web application where users can browse daily menus, select preferred meals, and order tiffin services conveniently online.",
      tech: ["REACT", "FIREBASE", "TAILWIND CSS"],
      type: "Group Project",
    },
    {
      title: "Fundbook",
      link: "https://fundbook-easy-fundraising.netlify.app/",
      repo:"https://github.com/Altamash-0203/FundBook-App",
      img: "/FundBookLogo.png",
      desc: "A web application where users can raise campaigns, collect funds, comment, and see live donor updates.",
      tech: ["REACT", "FIREBASE", "TAILWIND CSS"],
      type: "Individual Project",
    },
    {
      title: "BookDonals",
      link: "https://book-donalds.netlify.app/",
      repo:"https://github.com/Altamash-0203/BookDonals-The-Book-Club",
      img: "/club-logo.png",
      desc: "A platform where users can explore top books, join or create book clubs, and chat with members.",
      tech: ["REACT", "FIREBASE", "TAILWIND CSS"],
      type: "Individual Project",
    },
    {
      title: "Creation Buzz",
      link: "https://the-creation-buzz.netlify.app/",
      repo:"https://github.com/Altamash-0203/Creation_Buzz",
      img: "/1d448813-8031-42a1-a075-788d955618fe.png",
      desc: "A web app where users can create and schedule posts, and publish photos to multiple social media accounts.",
      tech: ["HTML", "CSS", "JAVASCRIPT", "FIREBASE"],
      type: "Individual Project",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Projects
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Project Image */}
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-indigo-600">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.type}</span>
                </div>

                <p className="mt-2 text-gray-600">{project.desc}</p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-4 flex justify-around gap-4 text-center flex-wrap">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded hover:bg-indigo-700 transition w-25"
                  >
                    <p className="text-white">Live</p>
                  </a>
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition w-25"
                  >
                    <p className="text-white">Github</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
