import React from "react";
import Navbar from "components/Navbar/Navbar";

// Toggle this line on/off as needed
// import "./styles/debugging.css";


export default function Home() {

  return (
    <>
      <Navbar />

      <main style={{ minHeight: '', padding: '2rem' }} role="main">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the home section. Use the navigation bar to explore different sections.</p>

        <section id="about" style={{ minHeight: '100vh', padding: '2rem' }} role="region" aria-labelledby="about-heading">
          <h1>About Me</h1>
          <p>This is the About Me section.</p>
        </section>

        <section id="career" style={{ minHeight: '100vh', padding: '2rem' }} role="region" aria-labelledby="career-heading">
          <h1>Career</h1>
          <p>This is the Career section.</p>
        </section>

        <section id="skills" style={{ minHeight: '100vh', padding: '2rem' }} role="region" aria-labelledby="skills-heading">
          <h1>Skills</h1>
          <p>This is the Skills section.</p>
        </section>

        <section id="portfolio" style={{ minHeight: '100vh', padding: '2rem' }} role="region" aria-labelledby="portfolio-heading">
          <h1>Portfolio</h1>
          <p>This is the Portfolio section.</p>
        </section>

        <section id="contact" style={{ minHeight: '100vh', padding: '2rem' }} role="region" aria-labelledby="contact-heading">
          <h1>Contact</h1>
          <p>This is the Contact section.</p>
        </section>
      </main>

      
    </>
  );
}
