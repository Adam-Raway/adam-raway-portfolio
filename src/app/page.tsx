import React from "react";
import Navbar from "components/Navbar/Navbar";

import aboutStyles from 'styles/sectionStyles/about.module.css';
import careerStyles from 'styles/sectionStyles/career.module.css';
import skillsStyles from 'styles/sectionStyles/skills.module.css';
import portfolioStyles from 'styles/sectionStyles/portfolio.module.css';
import contactStyles from 'styles/sectionStyles/contact.module.css';

// Toggle this line on/off as needed
// import "./styles/debugging.css";


export default function Home() {

  return (
    <>
      <Navbar />

      <main role="main">

        <section id="about" role="region" aria-labelledby="about-heading" className={aboutStyles["about-section"]}>
          <h1>About Me</h1>
          <p>This is the About Me section.

            asdf
            asdf
            adfs
            adsf
            adfs sdafasdf asf asf as s 

            ads
          </p>
          asdfasfd
          asfd
          asdf
          afs
          asdf
          sdf
          adfs
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
