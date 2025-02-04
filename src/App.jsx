import { useState } from 'react';
import Menu from "./Components/Menu/Menu";
import Project from "./Components/Project/Project";
import './App.css';

function App() {
  const [count, setCount] = useState( 0 )

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
            </div>
          </div>
        </section>

        <section id="technologies">
          <div class="container">
            <div id="tech-container">
              <div id="svg-container">
                {/*svg 1*/}
                <svg  viewBox="0 0 688 322" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M687 128.883C645.189 136.574 549.721 102.681 499.955 84.223C437.749 61.1505 390.06 34.4694 308.237 19.0181C245.312 7.13553 196.656 1.16719 180 1" stroke="#B1B1B1" stroke-width="2" />
                  <path d="M687 193.117C645.189 185.426 549.721 219.319 499.955 237.777C437.749 260.849 390.06 287.531 308.237 302.982C245.312 314.864 196.656 320.833 180 321" stroke="#B1B1B1" stroke-width="2" />
                  <path d="M687 140.084C620.457 144.756 533 141.495 434.136 123.474C378.286 113.294 308.021 81.9268 233.239 72.416C164.388 63.6595 98.251 66.4092 71 66.4092" stroke="#B1B1B1" stroke-width="2" />
                  <path d="M687 181.916C620.457 177.244 533 180.505 434.136 198.526C378.286 208.706 308.021 240.073 233.239 249.584C164.388 258.341 98.251 255.591 71 255.591" stroke="#B1B1B1" stroke-width="2" />
                  <path d="M687 161.968C550.227 169.292 471.156 166.533 300.19 154.548C250.325 151.052 23.0831 130.077 1 136.07" stroke="#B1B1B1" stroke-width="2" />
                </svg>


                {/*svg 2*/}

                <svg viewBox="0 0 688 322" fill="none" xmlns="http://www.w3.org/2000/svg">


                  <defs>

                    <linearGradient id="svg-gradient" >
                      <stop offset="0" stopColor="white" stop-opacity="0" />

                      <stop offset="0.9" stopColor="white" stop-opacity="1" />

                      <stop offset="0.9" stopColor="white" stop-opacity="0" />
                    </linearGradient>

                    <mask id="svg-gradient-mask">
                      <rect class="mask-rect" x="0" y="0" width="100%" height="100%" fill="url(#svg-gradient)"/>
                    </mask>

                    
                  </defs>


                  <path d="M687 128.883C645.189 136.574 549.721 102.681 499.955 84.223C437.749 61.1505 390.06 34.4694 308.237 19.0181C245.312 7.13553 196.656 1.16719 180 1" stroke="#0000FF" stroke-width="2" fill="none" mask="url(#svg-gradient-mask)"/>
                  <path d="M687 193.117C645.189 185.426 549.721 219.319 499.955 237.777C437.749 260.849 390.06 287.531 308.237 302.982C245.312 314.864 196.656 320.833 180 321" stroke="#FF0000" stroke-width="2" fill="none" mask="url(#svg-gradient-mask)"/>
                  <path d="M687 140.084C620.457 144.756 533 141.495 434.136 123.474C378.286 113.294 308.021 81.9268 233.239 72.416C164.388 63.6595 98.251 66.4092 71 66.4092" stroke="#FFFF00" stroke-width="2" fill="none" mask="url(#svg-gradient-mask)"/>
                  <path d="M687 181.916C620.457 177.244 533 180.505 434.136 198.526C378.286 208.706 308.021 240.073 233.239 249.584C164.388 258.341 98.251 255.591 71 255.591" stroke="#008000" stroke-width="2" fill="none" mask="url(#svg-gradient-mask)"/>
                  <path d="M687 161.968C550.227 169.292 471.156 166.533 300.19 154.548C250.325 151.052 23.0831 130.077 1 136.07" stroke="#800080" stroke-width="2" fill="none" mask="url(#svg-gradient-mask)"/>
                </svg>




              </div>
              <div id="about-me">
                <div id="memoji-placeholder">

                </div>
              </div>
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
