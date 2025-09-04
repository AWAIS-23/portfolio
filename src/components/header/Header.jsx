import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";
import SwitchDark from "../switch/SwitchDark";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div
          className={styles.logo}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 0,
            width: "165px",
            height: "70px",
          }}
        >
          <p
            className="text-center mb-0 d-flex align-items-center"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#ffb400",
              lineHeight: "25px",
            }}
          >
            HUZAIFA UMER
          </p>
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
            Home
          </Link>
          <Link
            href="#about"
            className={router.pathname === "/about" ? styles.active : ""}
          >
            About
          </Link>
          <Link
            href="#portfolio"
            className={router.pathname === "/portfolio" ? styles.active : ""}
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className={router.pathname === "/contact" ? styles.active : ""}
          >
            Contact
          </Link>
        </nav>
        <div className="d-flex align-items-center">
          <div>
            <button
              className={styles.menuButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="mt-3">
            <SwitchDark />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
