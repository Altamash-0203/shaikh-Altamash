import React from "react";
import {GitHubCalendar} from "react-github-calendar";

function GitHubStats() {
  const username = "Altamash-0203";

  return (
    <section id="github" className="py-20 bg-gray-400">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          GitHub Stats & Calendar
        </h2>

        {/* GitHub Stats Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 flex-wrap">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
            alt="GitHub Stats"
            className="rounded-lg shadow-md w-full md:w-auto max-w-full"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical`}
            alt="Top Languages"
            className="rounded-lg shadow-md w-full md:w-auto max-w-full"
          />
        </div>

        {/* GitHub Contribution Calendar */}
        <div className="hidden md:hidden lg:flex justify-center overflow-x-auto">
          <div className="w-max">
           <GitHubCalendar
           className="bg-gray-500"
  username={username}
  blockSize={15}
  blockMargin={5}
  fontSize={16}
  style={{ width: "100%", maxWidth: "700px" }}
  color="gray"
  fontColor="#green"    // Text color
  showWeekdayLabels={true}
/>

          </div>
        </div>
      </div>
    </section>
  );
}

export default GitHubStats;
