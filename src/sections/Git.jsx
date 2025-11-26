import React from "react";
import {GitHubCalendar} from "react-github-calendar";

function GitHubStats() {
  const username = "Altamash-0203";

  // Replace these URLs with your self-hosted version or a working alternative
  const statsURL = `https://camo.githubusercontent.com/105a7030de158879a3401f6717c5ce6f9a6e9b43c21ec1691370c897e82da677/68747470733a2f2f6e69727a616b2d73747265616b2d73746174732e76657263656c2e6170702f3f757365723d416c74616d6173682d30323033267468656d653d626c75655f6e61767926686964655f626f726465723d66616c7365`;
  const topLangsURL = `https://camo.githubusercontent.com/af9f790fae87794634a19a39467a371f8913fb59dfdef307d13dc592572d341d/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d416c74616d6173682d30323033267468656d653d626c75655f6e61767926686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565266c61796f75743d636f6d70616374`;

  return (
    <section id="github" className=" m-10  rounded-xl py-20 bg-gray-300 text-black ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          GitHub Stats & Calendar
        </h2>

        {/* GitHub Stats Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 flex-wrap">
          <img
            src={statsURL}
            alt="GitHub Stats"
            className="rounded-lg shadow-md w-full md:w-auto max-w-full"
          />
          <img
            src={topLangsURL}
            alt="Top Languages"
            className="rounded-lg shadow-md w-full md:w-auto max-w-full"
          />
        </div>

        {/* GitHub Contribution Calendar */}
        <div className="hidden lg:flex justify-center overflow-x-auto">
          <div className="w-max">
            <GitHubCalendar
              username={username}
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              style={{ width: "100%", maxWidth: "700px" }}
              color="#4ade80"      // Green blocks
              fontColor="#ffffff"   // White text
              // showWeekdayLabels={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GitHubStats;
