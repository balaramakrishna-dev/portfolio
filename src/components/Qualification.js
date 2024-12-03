import React from "react";
import GradientText from "../asserts/GradientText";
import BapatlaEng from "../asserts/images/bapatla_eng_logo.png";
import Gayatri from "../asserts/images/gayatri_college.jpeg";
import SivaSai from "../asserts/images/sivasai.jpg";

const education = [
  {
    src: BapatlaEng,
    alt: "bapatla",
    title: "Bapatla Engineering College",
    date: "Aug 2019 - Mar 2023",
    degree: "B.Tech - Information Technology",
  },
  {
    src: Gayatri,
    alt: "gayatri",
    title: "Sri Gayatri Junior College",
    date: "Jun 2017 - Mar 2019",
    degree: "MPC",
  },
  {
    src: SivaSai,
    alt: "sivasai",
    title: "Sri Siva Sai School",
    date: "Jun 2016 - May 2017",
    degree: "SSC",
  },
]

const Qualification = () => {
  return (
    <div
      className="px-10 mt-10"
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div className="w-full">
        <GradientText
          colors={["rgb(247, 39, 152)", "rgb(82, 92, 285)"]}
          animationSpeed={5}
          showBorder={false}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span className="font-bold text-2xl text-left w-full">Education</span>
        </GradientText>
      </div>
      <div className="space-y-4 mt-4">
        {education.map((item, index) => (
          <div
            key={index}
            className="rounded-lg flex"
            data-aos="fade-up"
            data-aos-duration={`${1000 + index * 200}`}
          >
            <div className="flex-none">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border w-[70px] h-[70px] m-auto bg-muted-background">
                <img
                  className="h-full w-full object-contain"
                  src={item.src}
                  alt={item.alt}
                />
              </span>
            </div>
            <div className="flex-grow ml-4 items-center flex-col group max-w-[700px]">
              <div className="flex flex-col items-center h-full w-full justify-center">
                <div className="w-full flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center font-semibold text-xl">
                    {item.title}
                  </h3>
                  <div className="text-l tabular-nums text-muted-foreground text-right">
                    {item.date}
                  </div>
                </div>
                <div className="w-full font-sans text-l">{item.degree}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualification;
