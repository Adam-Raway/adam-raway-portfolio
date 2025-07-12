import styles from "./about.module.css";
import Link from "next/link";

// Toggle this line on/off as needed
// import "./styles/debugging.css";


export default function Home() {
  return (
    <>
      <main>
        {/*
          About Me
        */}
        <section className={styles.aboutMe}>
          <p className={styles.aboutMeWorkText}>
            I’m a CS student at UofT curious about how people work with AI. Currently, I am working as a Data Analyst at Ensminger Lab and serving as a Publishing Associate at UofT AI, where I work on data-driven problems while honing my ability to communicate across disciplines.

            I’m especially interested in challenges at the intersection of data, intelligence, and human behavior. On the technical side, I’ve worked with Python, C, React, Typescript, SQL, and ML tools like PyTorch to build various projects ranging from forest analysis automation pipelines to personal builds like an ocean ecosystem simulation. I also enjoy researching and writing about the impacts of LLMs on education, whether through published articles or research summaries.
          </p>
          <img className={styles.aboutMePortrait}
            src="/profile-picture.jpg"
            alt="Portrait of Adam Raway used for personal branding."
          ></img>
        </section>
        
        {/*
          Outside of Work
        */}
        <section className={styles.aboutMe}>
          <div className={styles.hobby}>
            <h2>Reading</h2>
            <div className={styles.hobbyContent}>
              <p className={styles.hobbyText}>

              </p>
            </div>
          </div>
          <div className={styles.hobby}>
            <h2>Bouldering</h2>
            <div className={styles.hobbyContent}>
              <p className={styles.hobbyText}>
                
              </p>

              {/* TODO: Get the bouldering image of you falling. */}
              <img className="hobby__image"
                src="/falling-with-style.png"
                alt="Photo of Adam falling off a bouldering wall."
              ></img>
            </div>
          </div>
          <div className={styles.hobby}>
            <h2>Formula 1</h2>
            <div className={styles.hobbyContent}>
              <p className={styles.hobbyText}>
                
              </p>
            </div>
          </div>
        </section>

        {/*
          Recommended Pages
        */}
        <section>
          
        </section>
      </main>
    </>
  );
}
