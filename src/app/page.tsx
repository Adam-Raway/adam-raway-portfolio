import React from "react";
import Image from "next/image";

import Navbar from "components/Navbar/Navbar";
import TopicToken from "components/TopicToken/TopicToken";

import aboutStyles from 'styles/sectionStyles/About.module.css';
import careerStyles from 'styles/sectionStyles/Career.module.css';
import skillsStyles from 'styles/sectionStyles/Skills.module.css';
import portfolioStyles from 'styles/sectionStyles/Portfolio.module.css';
import contactStyles from 'styles/sectionStyles/Contact.module.css';

// Toggle this line on/off as needed
// import "./styles/debugging.css";


export default function Home() {

  return (
    <>
      <Navbar />

      <main role="main">

        <section id="about" role="region" aria-labelledby="about-heading" className={aboutStyles["about-section"]}>
          {/* Left Half is img */}
          <Image
            src="/profile-picture.jpg"
            alt="Profile picture of Adam Raway"
            className={aboutStyles["about-section__image"]}
            width={250}
            height={250}
          />

          {/* Right Half is content */}
          <div className={aboutStyles["about-section__content"]}>
            <h2>Nice to meet you</h2>
            <h1>I'm Adam Raway</h1>
            <p>
              I’m a CS student at UofT curious about how people work with AI. Currently, I am working as a Data Analyst at Ensminger Lab and serving as a Publishing Associate at UofT AI, where I work on data-driven problems while honing my ability to communicate across disciplines.
                <br></br>
                <br></br>
              I’m especially interested in challenges at the intersection of data, intelligence, and human behavior. On the technical side, I’ve worked with Python, C, React, Typescript, SQL, and ML tools like PyTorch to build various projects ranging from forest analysis automation pipelines to personal builds like an ocean ecosystem simulation. I also enjoy researching and writing about the impacts of LLMs on education, whether through published articles or research summaries.
            </p>

            <div className={aboutStyles["about-section__topics"]}>
              <TopicToken text="Data Analytics" />
              <TopicToken text="AI/ML" />
              <TopicToken text="LLM Tuning + Benchmarking" />
              <TopicToken text="Software Eng." />
              <TopicToken text="Computing Education" />
              <TopicToken text="Robotics" />
              
            </div>

          </div>
        </section>

















        <section id="career" style={{ minHeight: '100vh', padding: '2rem' }} role="region" aria-labelledby="career-heading">
          <h1>Career</h1>
          <p>This is the Career section, it is currently under construction.</p>
        </section>

        <section id="skills" style={{ minHeight: '100vh', padding: '2rem' }} role="region" aria-labelledby="skills-heading">
          <h1>Skills</h1>
          <p>This is the Skills section, it is currently under construction.</p>
        </section>

        <section id="portfolio" style={{ minHeight: '100vh', padding: '2rem' }} role="region" aria-labelledby="portfolio-heading">
          <h1>Portfolio</h1>
          <p>This is the Portfolio section, it is currently under construction.</p>
        </section>

        <section id="contact" style={{ minHeight: '100vh', padding: '2rem' }} role="region" aria-labelledby="contact-heading">
          <h1>Contact</h1>
          <p>This is the Contact section, it is currently under construction.</p>
        </section>
      </main>

      
    </>
  );
}
