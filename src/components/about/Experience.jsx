import React from "react";

const experienceContent = [
  {
    year: "May, 2025 - Present",
    position: "Frontend Web Developer",
    compnayName: "IT Genics",
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
  },
  {
    year: "Nov, 2024 - Feb, 2025",
    position: "React & Next JS Developer (Intern)",
    compnayName: "Web Craft Limited solutions",
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: "Sep, 2024 - Nov, 2024",
    position: "MERN Stack Developer",
    compnayName: "Developers Hub Corporation",
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
