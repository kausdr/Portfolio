import Menu from "./Components/Menu/Menu";
import ProjectContainer from "./Components/ProjectsContainer/ProjectContainer";
import IconTech from "./Components/Icon/IconTech";
import Contact from "./Components/Contact/Contact";
import TechContainer from "./Components/TechContainer/TechContainer";



import ReactImg from "./assets/logos/react.svg";
import JsImg from "./assets/logos/js.webp";
import HtmlImg from "./assets/logos/html.webp";
import GitHubImg from "./assets/logos/github.svg"


import memojiStar from "./assets/memoji/memojiStar.png";
import memojiCoding from "./assets/memoji/memojiCoding.png";
import memojiExploding from "./assets/memoji/memojiExploding.png";
import memojiIdea from "./assets/memoji/memojiIdea.png";
import memojiThinking from "./assets/memoji/memojiThinking.png";

import './App.css';


function App() {

  return (
    <>
      <div id="main">
        <div id="background-container"></div>

        <header>
          <div class="container">
            <Menu />
          </div>
        </header>

        <section id="hero-shot">
          <div class="container">
            <div id="presentation">
              <h1>Hello, I'm Kauane.</h1>
              <h2>Front-end Developer</h2>
              <Contact />

              <IconTech customStyle={{
                position: "absolute",
                top: "50px",
                right: "0px",
                width: "20vw",
                height: "20vh",
                padding: "0px"
              }} src={memojiIdea} />


              <IconTech customStyle={{
                position: "absolute",
                top: "50px",
                left: "0px",
                width: "15vw",
                height: "15vh",
                padding: "0px",
              }} src={memojiStar} />

            </div>
          </div>
        </section>

        <section id="technologies">
          <div id="tech-container-div" class="container">

            <div id="tech-container">
              <div class="svg-container">

                <svg width="152" height="77" viewBox="0 0 152 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.00761H39.6304C49.6634 1.00762 58.5927 0.207724 58.1914 15.0057C57.7901 29.8036 58.0242 40.1689 58.1914 43.5017C58.7432 54.5002 62.2046 56 80.7657 56C97.6211 56 135.278 56 152 56" stroke="#D2D2D2" stroke-width="1" />
                  <path d="M151.5 75.5L53.8638 74.5269L22.0376 74.2097L1 74" stroke="#D2D2D2" stroke-width="1" />
                </svg>


                <svg id="svgLeft" width="152" height="77" viewBox="0 0 152 77" fill="none" xmlns="http://www.w3.org/2000/svg">

                  <defs>

                    <linearGradient id="svg-gradient-left" >
                      <stop offset="0" stopColor="white" stop-opacity="0" />

                      <stop offset="0.9" stopColor="white" stop-opacity="1" />

                      <stop offset="0.9" stopColor="white" stop-opacity="0" />
                    </linearGradient>

                    <mask id="svg-gradient-mask-left">
                      <rect class="mask-rect-left" x="0" y="0" width="100%" height="100%" fill="url(#svg-gradient-left)" />
                    </mask>


                  </defs>

                  <path d="M0 1.00761H39.6304C49.6634 1.00762 58.5927 0.207724 58.1914 15.0057C57.7901 29.8036 58.0242 40.1689 58.1914 43.5017C58.7432 54.5002 62.2046 56 80.7657 56C97.6211 56 135.278 56 152 56" stroke="#7DA9FF" stroke-width="1.5" mask="url(#svg-gradient-mask-left)" />
                  <path d="M151.5 75.5L53.8638 74.5269L22.0376 74.2097L1 74" stroke="#7DA9FF" stroke-width="1.5" mask="url(#svg-gradient-mask-left)" />

                  <foreignObject x="-20" y="-25" width="40" height="40">
                    <IconTech customStyle={{
                      backgroundColor: "var(--background-color)",
                      boxShadow: "0px 0px 5px var(--shadow-color)"
                    }}
                      class="iconTech" src={GitHubImg} />
                  </foreignObject>
                  <foreignObject x="-10" y="50" width="40" height="40">
                    <IconTech customStyle={{
                      backgroundColor: "var(--background-color)",
                      boxShadow: "0px 0px 5px var(--shadow-color)"
                    }} class="iconTech" src={ReactImg} />
                  </foreignObject>
                  
                </svg>
              </div>


              <div id="memoji-container">
                <div id="memoji-placeholder">
                  <IconTech customStyle={{
                    backgroundColor: "var(--background-color)",
                    boxShadow: "0px 0px 5px var(--shadow-color)",
                    zIndex: "2",
                  }}
                    class="iconTech" src={memojiExploding} />
                </div>
              </div>

              <div class="svg-container">

                {/*svg 1*/}

                <svg width="152" height="57" viewBox="0 0 152 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M152 1.00762H112.37C102.337 1.00762 93.4073 0.207726 93.8086 15.0057C94.2099 29.8036 93.9758 40.1689 93.8086 43.5017C93.2568 54.5002 89.7954 56 71.2343 56C54.3789 56 16.7217 56 3.15905e-06 56" stroke="#D2D2D2" stroke-width="1" />
                </svg>


                {/*svg 2*/}

                <svg id="svgRight" width="152" height="57" viewBox="0 0 152 57" fill="none" xmlns="http://www.w3.org/2000/svg">

                <defs>

                    <linearGradient id="svg-gradient-right" >
                      <stop offset="0" stopColor="white" stop-opacity="0" />

                      <stop offset="0.1" stopColor="white" stop-opacity="1" />

                      <stop offset="1" stopColor="white" stop-opacity="0" />
                    </linearGradient>

                    <mask id="svg-gradient-mask-right">
                      <rect class="mask-rect-right" x="0" y="0" width="100%" height="100%" fill="url(#svg-gradient-right)" />
                    </mask>


                  </defs>

                  <path d="M152 1.00762H112.37C102.337 1.00762 93.4073 0.207726 93.8086 15.0057C94.2099 29.8036 93.9758 40.1689 93.8086 43.5017C93.2568 54.5002 89.7954 56 71.2343 56C54.3789 56 16.7217 56 3.15905e-06 56" stroke="#7DA9FF" stroke-width="1.5" mask="url(#svg-gradient-mask-right)" />

                  <foreignObject x="120" y="-25" width="40" height="40">
                    <IconTech customStyle={{
                      backgroundColor: "var(--background-color)",
                      boxShadow: "0px 0px 5px var(--shadow-color)"
                    }}
                      class="iconTech" src={JsImg} />
                  </foreignObject>
                </svg>
              </div>
            </div>

            <div id="about-me">
              <div id="about-me-text">
                <p>
                  Hi, I'm Kauane. I am a Front-end and IOS developer and I'm passionate about technology.
                </p>
                <p>I am currently studying Information Systems at PUCPR.</p>
                <p>And here you'll find my greatest projects!</p>
              </div>
            </div>


          </div>

          <div class="container">
            <div id="techs">
              <TechContainer></TechContainer>

            </div>
          </div>
        </section>

        <section id="projects">
          <div class="container">
            <div id="my-projects">
              <div>
                <h1>Portfolio</h1>
                <h2>Explore my latest works</h2>
              </div>
              <div id="projects-container">

                <ProjectContainer></ProjectContainer>


              </div>
            </div>
          </div>
        </section>

        <footer>
          <div class="container">
            <div id="footer-container">
              <div id="footer-text">
                <p>Portfolio made by Kauane using React Js</p>
              </div>

              <div id="pic-footer">
                <img src={memojiStar} alt="Website's logo"></img>
              </div>
              <Contact></Contact>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}

export default App
