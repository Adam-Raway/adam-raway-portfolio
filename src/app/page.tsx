import "./styles/homepage.css";

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

        <nav className="navBar">
          {/*
            The pages of my site will include my resume page, projects & experience page,
            publications page, contact me page. Any other ideas?
          */}
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Resume</a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Projects & Experience</a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Publications</a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Contact Me</a>
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
        <section className="aboutMe">
          <p>Here is some text about me!</p>
          <img className="profilePic"
            src="/profile-picture.jpg"
            alt="A portrait photo of me in front of some trees."
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
        <nav className="navBar">
          <a href="https://github.com/Adam-Raway" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/adam-raway" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:adamraway@gmail.com">Email</a>
        </nav>
      </footer>
    </>
  );
}
