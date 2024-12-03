import React, { useState } from "react";
import BilvantisLogo from "../asserts/images/bilvantistechnologies_logo.png";
import GradientText from "../asserts/GradientText";

const experiences = [
  {
    company: "Bilvantis Technologies LLP",
    logo: BilvantisLogo,
    position: "Programmer Analyst",
    duration: "Dec 2023 - Present",
    techstack: [
      "Python",
      "React JS",
      "Google Cloud",
      "Docker",
      "Django",
      "Tailwind CSS",
      "Next JS",
    ],
  },
];

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="px-10">
      <div className="w-full">
        <GradientText
          colors={["rgb(247, 39, 152)", "rgb(82, 92, 285)"]}
          animationSpeed={5}
          showBorder={false}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span className="font-bold text-2xl text-left w-full">
            Work Experience
          </span>
        </GradientText>
      </div>
      <div className="space-y-4 mt-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="rounded-lg flex cursor-pointer group transition-transform duration-500 ease-in-out hover:scale-105"
            data-aos="fade-up"
            data-aos-duration={1400 + index * 200}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex-none">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border w-[70px] h-[70px] m-auto bg-muted-background">
                <img
                  className="h-full w-full object-contain"
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                />
              </span>
            </div>
            <div className="flex-grow ml-4 flex-col transition-all duration-1000 ease-in-out max-w-[700px] group-hover:max-w-full">
              <div className="flex flex-col items-center h-full w-full justify-center">
                <div className="w-full flex items-center justify-between gap-x-2 text-base">
                  {/* Company Name with Fixed Width */}
                  <div>
                    <div className="inline-flex w-[250px] font-semibold text-xl">
                      {exp.company}
                    </div>
                    <div className="w-full font-sans text-l mt-1">
                      {exp.position}
                    </div>
                  </div>

                  {/* Tech Stack Skills */}
                  {hoveredIndex === index && (
                    <div className="flex flex-wrap items-center justify-start gap-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in transform translate-y-4 group-hover:translate-y-0">
                      {exp.techstack.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm transition-all duration-1000 ease-in transform opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-[-10px]"
                          style={{
                            transitionDelay: `${skillIndex * 2000}ms`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="text-l tabular-nums text-muted-foreground text-right">
                    {exp.duration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
