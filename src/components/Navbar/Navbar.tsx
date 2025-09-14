"use client";
import React from "react";
import styles from "./Navbar.module.css";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      
      {/* My Name or Brand */}
      <p className={styles["navbar__name"]}>
        Adam Raway
      </p>

      {/* Internal navigation links */}
      <ul className={styles["navbar__internal-links"]}>
        <li><a href="#about" className={styles["navbar__internal-link"]}>About</a></li>
        <li><a href="#career" className={styles["navbar__internal-link"]}>Career</a></li>
        <li><a href="#skills" className={styles["navbar__internal-link"]}>Skills</a></li>
        <li><a href="#portfolio" className={styles["navbar__internal-link"]}>Portfolio</a></li>
        <li><a href="#contact" className={styles["navbar__internal-link"]}>Contact</a></li>
      </ul>

      {/* External links (as icons) */}
      <ul className={styles["navbar__external-links"]}>
        <li>
          <a
            href="https://github.com/Adam-Raway"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["navbar__external-link"]}
          >
            <Github size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/adam-raway/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["navbar__external-link"]}
          >
            <Linkedin size={20} />
          </a>
        </li>
        <li>
          <a
            href="mailto:adamraway@gmail.com"
            className={styles["navbar__external-link"]}
          >
            <Mail size={20} />
          </a>
        </li>
      </ul>

    </nav>
  );
}
