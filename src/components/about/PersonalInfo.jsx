import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Awais ", hasColor: "" },
  { meta: "last name", metaInfo: "Asghar", hasColor: "" },
  { meta: "Age", metaInfo: "22 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Pakistan", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "276 karim block Allama iqbal town Lahore, Pakistan", hasColor: "" },
  { meta: "phone", metaInfo: "+923136652912", hasColor: "" },
  { meta: "Email", metaInfo: "muhammmadawais65u@gmail.com", hasColor: "" },
  { meta: "langages", metaInfo: "English, Urdu, Hindi", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
