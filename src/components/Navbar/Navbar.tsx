"use client";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Github, Linkedin, Mail } from "lucide-react";

const sections = ["about", "career", "skills", "portfolio", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // find the first section that's visible
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // 60% of section must be visible
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.navbar}>
      <p className={styles["navbar__name"]}>Adam Raway</p>

      {/* Internal navigation links */}
      <ul className={styles["navbar__internal-links"]}>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`${styles["navbar__internal-link"]} ${
                activeSection === section
                  ? styles["navbar__internal-link--active"]
                  : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* External links */}
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
