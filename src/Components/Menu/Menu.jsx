import './Menu.css';
import memojiStar from "/memojiStar.png";

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
      section.scrollIntoView({ behavior: "smooth" });
  }
}

function Menu() {
    return  (
        <div class='menu-container'>
            <div id="pic-icon">
              <img src={memojiStar} alt="Website's logo"></img>
            </div>
                <nav id="menu" class='menu'>
                  <ul id="menu-list">
                    <li onClick={() => scrollToSection("hero-shot")}>About me</li>
                    <li onClick={() => scrollToSection("projects")}>Projects</li>
                  </ul>
                </nav>
        </div>
    )
}

export default Menu