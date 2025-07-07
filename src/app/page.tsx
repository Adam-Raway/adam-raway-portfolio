import Image from "next/image";
import Button from "./components/Button"

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

        <nav>
          {/*
            The pages of my site will include my resume page, projects & experience page,
            publications page, contact me page. Any other ideas?
          */}
          <menu>
            <li> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Resume</a> </li>
            <li> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Projects & Experience</a> </li>
            <li> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Publications</a> </li>
            <li> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Contact Me</a> </li>
          </menu>
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
        <section>

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
        <nav>
          <menu>
            <li><a href="https://github.com/Adam-Raway" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/adam-raway" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:adamraway@gmail.com">Email</a></li>
          </menu>
        </nav>
      </footer>
    </>
  );
}
