import React from "react";
import Marquee from "react-fast-marquee";
import Kubernetes from "../asserts/images/deploy-kubernetes-certi.png";
import DeveloperBadge from "../asserts/images/google-cloud-badge.png";
import IbmCerificatePython from "../asserts/images/python-dsa-ai.jpg";
import PythonMicrosoft from "../asserts/images/python-microsoft.png";

const Certifications = () => {
  return (
    <div className="w-full py-6">
      <Marquee pauseOnHover speed={50} gradient={false} style={{ gap: "65px" }}>
        <div className="flex items-center gap-12">
          {[
            Kubernetes,
            DeveloperBadge,
            IbmCerificatePython,
            PythonMicrosoft,
          ].map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-52 h-52 p-4 rounded-lg"
            >
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Certifications;
