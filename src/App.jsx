import { useState } from 'react';
import Menu from "./Components/Menu/Menu";
import Project from "./Components/Project/Project";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main">
        <div id="background-container"></div>

        <header>
          <div class="container">
              <Menu/>
          </div>
        </header>

        <section id="hero-shot">
                <div class="container">
                  <div id="presentation">
                    <h1>Hello, I'm Kauane.</h1>
                    <p>Front-end Developer</p>
                  </div>
                </div>
        </section>

        <section id="technologies">
          <div class="container">
            <div id="my-technologies">
              <p>oudhasofdaosidjkasjdlaksjdklsa</p>
            </div>
          </div>
        </section>

        <section id="projects">
            <div class="container">
                <div id="my-projects">
                  <div>
                    <h1>Portfolio</h1>
                    <p>Explore my latest works</p>
                  </div>
                    <div id="projects-container">
                      <Project/>
                      <Project/>
                      <Project/>
                      <Project/>
                    </div>
                </div>
            </div>
        </section>

        <footer>

        </footer>
        
      </div>
    </>
  )
}

export default App
