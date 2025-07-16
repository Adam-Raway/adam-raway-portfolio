import aboutMeStyles from "./about.module.css";

import ContentCard from "components/ContentCard/ContentCard";
import HobbyCard from "components/HobbyCard/HobbyCard";
import Slideshow from "components/Slideshow/Slideshow";

// Toggle this line on/off as needed
// import "./styles/debugging.css";


export default function Home() {

  return (
    <>
      <main>
        {/*
          About Me
        */}
        <ContentCard
          text={
            <>
              I’m a CS student at UofT curious about how people work with AI. Currently, I am working as a Data Analyst at Ensminger Lab and serving as a Publishing Associate at UofT AI, where I work on data-driven problems while honing my ability to communicate across disciplines.
                <br></br>
                <br></br>
              I’m especially interested in challenges at the intersection of data, intelligence, and human behavior. On the technical side, I’ve worked with Python, C, React, Typescript, SQL, and ML tools like PyTorch to build various projects ranging from forest analysis automation pipelines to personal builds like an ocean ecosystem simulation. I also enjoy researching and writing about the impacts of LLMs on education, whether through published articles or research summaries.
            </>
          }
          imageSrc="/profile-picture.jpg"
          alt="Portrait of Adam Raway"
          orientation={0}
          textClass={aboutMeStyles.aboutMeWorkText}
          imageClass={aboutMeStyles.aboutMePortrait}
        />
        
        {/*
          Outside of Work
        */}
        <HobbyCard
          hobbyName="Bouldering"
          text="asdadsfasdfasfasfasdfadfsa asdfasf sa"
          imageSrc="falling-with-style.png"
          alt="Photo of me falling off of a bouldering wall."
          orientation={0}
        />

        <Slideshow 
          slides={[
            <HobbyCard
              hobbyName="Bouldering"
              text="asdadsfasdfasfasfasdfadfsa asdfasf sa"
              imageSrc="falling-with-style.png"
              alt="Photo of me falling off of a bouldering wall."
              orientation={0}
            />,
            <p>Test 1</p>
          ]}
        />

        {/*
          Recommended Pages
        */}
        <section>
          
        </section>
      </main>
    </>
  );
}
