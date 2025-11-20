import React from "react";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  // Replace with your real info
  const linkedIn = "https://www.linkedin.com/in/shaikh-altamash-200779287/";
  const github = "https://github.com/Altamash-0203";
  const leetcode = "https://leetcode.com/u/MVY6Axz7IW/";
  const email = "iamshaikh0203@gmail.com";
  const phone = "+917666181486";
  const resumeLink ="/Shaikh_Altamash_Resume.pdf";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 flex-wrap">
          <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:text-blue-700 transition">
            <FaLinkedin className="text-4xl" />
            <span>LinkedIn</span>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:text-gray-800 transition">
            <FaGithub className="text-4xl" />
            <span>GitHub</span>
          </a>
           <a href={leetcode} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:text-orange-600 transition">
            <SiLeetcode className="text-4xl" />
            <span>LeetCode</span>
          </a>
          <a href={`mailto:${email}`} className="flex flex-col items-center gap-2 hover:text-red-500 transition">
            <FaEnvelope className="text-4xl" />
            <span>{email}</span>
          </a>
          <a href={`tel:${phone}`} className="flex flex-col items-center gap-2 hover:text-green-600 transition">
            <FaPhone className="text-4xl" />
            <span>{phone}</span>
          </a>
        </div>

        {/* Resume Button */}
        <a
          href={resumeLink}
          download="Shaikh_Altamash_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          <p className="text-white">Download Resume</p>
        </a>
      </div>
    </section>
  );
}

export default Contact;
