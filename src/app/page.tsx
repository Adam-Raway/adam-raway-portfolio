import "./styles/homepage.css";
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
          <Link href="/resume">Resume</Link>
          <Link href="/projects_experience">Projects & Experience</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/contact">Contact Me</Link>
        </nav>
      </header>

      {/*
        This main section will store my homepage, including some text & images introducing
        me, recommendations of which pages to visit, my hobbies / outside of work.
      */}
      <main>
        {/*
          About Me
        */}
        <section className="about-me">
          <p>
            I’m a CS student at UofT curious about how people work with AI. Currently, I am working as a Data Analyst at Ensminger Lab and serving as a Publishing Associate at UofT AI, where I work on data-driven problems while honing my ability to communicate across disciplines.

            I’m especially interested in challenges at the intersection of data, intelligence, and human behavior. On the technical side, I’ve worked with Python, C, React, Typescript, SQL, and ML tools like PyTorch to build various projects ranging from forest analysis automation pipelines to personal builds like an ocean ecosystem simulation. I also enjoy researching and writing about the impacts of LLMs on education, whether through published articles or research summaries.
          </p>
          <img className="about-me__image"
            src="/profile-picture.jpg"
            alt="Portrait of Adam Raway used for personal branding."
          ></img>
        </section>
        
        {/*
          Outside of Work
        */}
        <section>
          
        </section>

        {/*
          Recommended Pages
        */}
        <section>
          
        </section>
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
