import React from "react";
import userIcon from "../asserts/images/view-3d-man-using-laptop-removebg-preview-transformed.png";
import { TypeAnimation } from "react-type-animation";
import LinkedInIcon from "../asserts/linkedinIcon";
import GithubIcon from "../asserts/githubIcon";
import CodeIocn from "../asserts/codeIcon";
import DynamicIconCloud from "../asserts/DynamicIcon";

const About = () => {
  return (
    <div className="w-full p-5 h-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left section: About text */}
        <div className="w-full lg:w-[65%] flex justify-start items-start mb-6 lg:mb-0">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <div className="flex items-center justify-center rounded-full h-20 w-20 bg-gray-200 shadow-lg overflow-hidden">
                <img
                  src={userIcon}
                  alt="icon"
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <h1
                  className="text-2xl font-semibold 
                text-color"
                >
                  Hi, I'm{" "}
                  <span className="uppercase text-mix-color font-bold">
                    Balaramakrishna kamma
                  </span>
                </h1>
                <h3 className="text-xl text-color flex flex-row gap-1.5">
                  I'm a
                  <span className="text-mix-color font-bold">
                    <TypeAnimation
                      sequence={[
                        "Certified Google Professional Cloud Developer",
                        "Software Engineer",
                        "Python Developer",
                        "AI Application Developer",
                      ]}
                      wrapper="span"
                      speed={20}
                      style={{ display: "inline-block" }}
                      repeat={Infinity}
                      cursor={true}
                    />
                  </span>
                </h3>
              </div>
            </div>
            <div className="text-color m-1 p-2">
              <p>
                Currently, I am working as a Software Engineer at{" "}
                <span className="text-mix-color font-bold">
                  Bilvantis Technologies LLP
                </span>
                , where I serve as an AI Application Developer. In this role, I
                lead the development of AI-powered applications to enhance
                productivity tracking by analyzing user activities and
                integrating AI-generated insights into user-friendly interfaces.
              </p>
            </div>
            <div className="px-3 py-2 text-color flex flex-row gap-5">
              <a
                href="https://www.linkedin.com/in/balaramakrishna-kamma-8341k/"
                target="_blank"
                className="inline-flex justify-center items-center rounded-full"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/balaramakrishna-dev/"
                target="_blank"
                className="inline-flex justify-center items-center rounded-full"
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
              <a
                href="https://leetcode.com/u/kamma_balarama_krishna/"
                target="_blank"
                className="inline-flex justify-center items-center rounded-full"
                rel="noreferrer"
              >
                <CodeIocn />
              </a>
            </div>
          </div>
        </div>

        {/* Right section: Image */}
        <div className="w-full lg:w-[40%] flex items-center justify-center">
          <DynamicIconCloud />
        </div>
      </div>
    </div>
  );
};

export default About;
