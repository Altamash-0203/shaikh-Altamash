import { 
  FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub 
} from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { SiRedux, SiTailwindcss, SiVite, SiExpress } from "react-icons/si";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { VscCode } from "react-icons/vsc";
import { FiDatabase } from "react-icons/fi";

const skills = {
  Languages: [
    { name: "JavaScript", icon: <FaJs size={40} /> },
    { name: "HTML5", icon: <FaHtml5 size={40} /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  ],
  "Libraries & Frameworks": [
    { name: "React.js", icon: <FaReact size={40} /> },
    { name: "Redux", icon: <SiRedux size={40} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
    { name: "Bootstrap", icon: <BsBootstrap size={40} /> },
    { name: "Vite", icon: <SiVite size={40} /> },
    { name: "Node.js", icon: <DiNodejs size={40} /> },
    { name: "Express.js", icon: <SiExpress size={40} /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt size={40} /> },
    { name: "Github", icon: <FaGithub size={40} /> },
    { name: "Vs Code", icon: <VscCode size={40} /> },
    { name: "Firebase", icon: <FiDatabase size={40} /> },
    { name: "Postman", icon: <VscCode size={40} /> },
    { name: "MongoDB", icon: <DiMongodb size={40} /> },
    { name: "Mongoose", icon: <DiMongodb size={40} /> },
  ],
};

function Skills() {
  return (
    <section id="skills" className="py-20 mt-10 bg-gray-50 border-t-2">
      <div className="max-w-6xl mx-auto px-6">
            
            <hr />
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Skills
        </h2>

        {/* Categories */}
        {Object.keys(skills).map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-6 text-center md:text-left">
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills[category].map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
                >
                  <div className="text-indigo-600 mb-2">
                    {skill.icon}
                  </div>
                  <p className="text-gray-700 font-medium text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;
