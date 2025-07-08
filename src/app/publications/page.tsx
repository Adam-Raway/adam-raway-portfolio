import "../styles/homepage.css";
import Link from "next/link";

// Toggle this line on/off as needed
// import "./styles/debugging.css";


export default function Home() {
  return (
    <>
      {/*
        This header will be common to all pages. It will be horizontally flexed. My name as h1
        will be on the left side, then a thin line/separator, then all the nav buttons will be
        aligned to the right side.
      */}
      <header>
        <h1>
          Adam Raway
        </h1>

        <nav className="navigation-bar">
          {/*
            The pages of my site will include my resume page, projects & experience page,
            publications page, contact me page. Any other ideas?
          */}
          <Link href="/..">Home</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects_experience">Projects & Experience</Link>
          <Link href="/contact">Contact Me</Link>
        </nav>
      </header>
      <main>

      </main>
      {/*
        This footer will be common to all pages. Has copyright and basic ways to contact me.
      */}
      <footer>
        <p>© 2025 Adam Raway. All rights reserved.</p>
        <nav className="navigation-bar">
          <a href="https://github.com/Adam-Raway" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/adam-raway" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:adamraway@gmail.com">Email</a>
        </nav>
      </footer>
    </>
  );
}