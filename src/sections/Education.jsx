import React from "react";

const timelineData = [
  {
    role: "Full-Stack Web Development (Learning)",
    company: "Masai School",
    date: "2025 – Present",
    description:
      "Gained full-stack web development—both front-end with HTML, CSS, JavaScript, React.js, and back-end with Node.js, Express, and MongoDB. Created real-world projects with complete CRUD functionality, authentication, and deployment experience.",
  },
  {
    role: "Bachelor of Computer Applications (BCA)",
    company: "Swami Ramteerth Marathwada University, Nanded",
    date: "2022 – 2025",
    description:
      "Studied basics of programming languages: C, C++, Python; gained strong theoretical background in CS concepts like databases, operating systems, and networking.",
  },
  {
    role: "12th – Science",
    company: "Shivaji College, Udgir",
    date: "2021 – 2022",
    description:
      "Completed Higher Secondary Education in Science with 73%, building a strong base in logical thinking and analytical skills.",
  },
  {
    role: "10th – Secondary Education",
    company: "V.V.H.S, Udgir",
    date: "2018 – 2019",
    description:
      "Completed Secondary School Education with 83.20%, developing a strong academic foundation and essential skills in mathematics, science, and communication.",
  },
];

function Education() {
  return (
    <section id="education" className="py-20 border bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Education
        </h2>

        <div className="flex flex-col gap-8">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-indigo-600">
                {item.role}
              </h3>
              <p className="text-gray-600 font-medium">{item.company}</p>
              <p className="text-gray-400 text-sm mb-4">{item.date}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
