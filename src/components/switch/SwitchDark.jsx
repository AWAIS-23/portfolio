import Image from "next/image";
import React, { useState, useEffect } from "react";
import lightImage from "../../../public/assets/img/sun.png";
import handleSwitchValue from "../../../utils/theme";

const SwitchDark = () => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-color");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");
    } else {
      setIsDark(false);
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
    }
  }, []);

  const handleLabelClick = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    handleSwitchValue(!newIsDark); // Toggle the theme
  };

  return (
    <label className={`theme-switcher-label d-flex ${isDark ? "active" : ""}`} style={{position: "static"}}>
      <input
        type="checkbox"
        onClick={handleLabelClick}
        className="theme-switcher"
        checked={isDark}
        onChange={() => {}} // This is needed to suppress React warning about controlled inputs
      />
      <div className="switch-handle">
        <span className="light-text">
          <i className="fa fa-sun-o" aria-hidden="true"></i>
        </span>
        <span className="dark-text">
          <i className="fa fa-moon-o" aria-hidden="true"></i>
        </span>
      </div>
    </label>
  );
};

export default SwitchDark;
