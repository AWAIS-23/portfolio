import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "HTML" },
  { skillClass: "p90", skillPercent: "90", skillName: "CSS" },
  { skillClass: "p85", skillPercent: "85", skillName: "Bootstrap" },
  { skillClass: "p95", skillPercent: "95", skillName: "Tailwind CSS" },
  { skillClass: "p80", skillPercent: "80", skillName: "JAVASCRIPT" },
  { skillClass: "p90", skillPercent: "90", skillName: "REACT" },
  { skillClass: "p90", skillPercent: "90", skillName: "NEXT JS" },
  { skillClass: "p80", skillPercent: "80", skillName: "MONGODB" },
  { skillClass: "p80", skillPercent: "80", skillName: "MySQL" },
  { skillClass: "p85", skillPercent: "85", skillName: "NODE JS" },
  { skillClass: "p85", skillPercent: "85", skillName: "GIT" },
  { skillClass: "p85", skillPercent: "85", skillName: "GITHub" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
