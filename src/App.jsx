import Menu from "./Components/Menu/Menu";
import Project from "./Components/Project/Project";
import IconTech from "./Components/Icon/IconTech";
import Contact from "./Components/Contact/Contact";
import Tech from "./Components/Tech/Tech";



import ReactImg from "./assets/logos/react.svg";
import JsImg from "./assets/logos/js.webp";
import HtmlImg from "./assets/logos/html.webp";


import memojiStar from "./assets/memoji/memojiStar.png";
import memojiCoding from "./assets/memoji/memojiCoding.png";
import memojiExploding from "./assets/memoji/memojiExploding.png";
import memojiIdea from "./assets/memoji/memojiIdea.png";
import memojiThinking from "./assets/memoji/memojiThinking.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
              <Contact/>

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
          <div class="container">

            <div id="tech-container">
              {/* <img id="techImg" src="src\assets\react.png" /> */}
              <div class="svg-container">
                <svg width="296" height="117" viewBox="0 0 296 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.23038C5.01822 -0.263239 31.1367 4.81506 103.465 37.0772C142.977 50.5198 151.683 51.4159 180.481 53.2083C203.518 54.6422 266.426 53.8057 295 53.2083" stroke="#C9C9C9" stroke-width="1.5" />
                  <path d="M84 115.817C94.8739 117.002 124.673 112.973 156.878 87.3709C189.084 61.7693 238.78 65.1473 273.484 65.1473L295 65.1473" stroke="#C9C9C9" stroke-width="1.5" />
                </svg>



                <svg id="svgLeft" width="296" height="117" viewBox="0 0 296 117" fill="none" xmlns="http://www.w3.org/2000/svg">

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

                  <path d="M1 1.23038C5.01822 -0.263239 31.1367 4.81506 103.465 37.0772C142.977 50.5198 151.683 51.4159 180.481 53.2083C203.518 54.6422 266.426 53.8057 295 53.2083" stroke="#7DA9FF" stroke-width="1.5" mask="url(#svg-gradient-mask-left)" />
                  <path d="M84 115.817C94.8739 117.002 124.673 112.973 156.878 87.3709C189.084 61.7693 238.78 65.1473 273.484 65.1473L295 65.1473" stroke="#7DA9FF" stroke-width="1.5" mask="url(#svg-gradient-mask-left)" />

                  <foreignObject x="30" y="85" width="60" height="60">
                    <IconTech customStyle={{
                      backgroundColor: "var(--background-color)",
                      boxShadow: "0px 0px 5px var(--shadow-color)"
                    }} class="iconTech" src={ReactImg} />
                  </foreignObject>
                  <foreignObject x="-20" y="-20" width="60" height="60">
                    <IconTech customStyle={{
                      backgroundColor: "var(--background-color)",
                      boxShadow: "0px 0px 5px var(--shadow-color)"
                    }}
                      class="iconTech" src={HtmlImg} />
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

                <svg width="217" height="55" viewBox="0 25 300 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216 1.02699C211.091 0.717202 196.365 2.94765 176.731 14.3477C152.187 28.5977 126.662 44.0869 93.2831 49.9728C73.6484 53.4351 68.1507 52.7609 0.999998 54" stroke="#C9C9C9" stroke-width="1.5" />
                </svg>

                {/*svg 2*/}

                <svg id="svgRight" width="217" height="55" viewBox="0 25 300 55" fill="none" xmlns="http://www.w3.org/2000/svg">

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

                  <path d="M216 1.02699C211.091 0.717202 196.365 2.94765 176.731 14.3477C152.187 28.5977 126.662 44.0869 93.2831 49.9728C73.6484 53.4351 68.1507 52.7609 0.999998 54" stroke="#7DA9FF" stroke-width="1.5" mask="url(#svg-gradient-mask-right)" />

                  <foreignObject x="190" y="-25" width="60" height="60">
                    <IconTech customStyle={{
                      backgroundColor: "var(--background-color)",
                      boxShadow: "0px 0px 5px var(--shadow-color)"
                    }}
                      class="iconTech" src={JsImg} />
                  </foreignObject>
                </svg>



              </div>
            </div>


          </div>

          <div class="container">
          <div id="techs">
                  <Tech></Tech>
                  <Tech></Tech>
                  <Tech></Tech>
                  <Tech></Tech>
                  <Tech></Tech>
                  <Tech></Tech>
                  <Tech></Tech>
                  <Tech></Tech>
                  <Tech></Tech>
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
                <Project />
                <Project />
                <Project />
                <Project />
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div class="container">
            <div id="footer-container">
              <p>Isso aqui é um footer, descobrirei mais tarde.</p>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}

export default App
