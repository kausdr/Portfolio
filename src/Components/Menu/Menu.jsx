import './Menu.css';
import memojiStar from "/memojiStar.png";

function Menu() {
    return  (
        <div class='menu-container'>
            <div id="pic-icon">
              <img src={memojiStar} alt="Website's logo"></img>
            </div>
                <nav id="menu" class='menu'>
                  <ul id="menu-list">
                    <li>Quem sou eu</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                  </ul>
                </nav>
        </div>
    )
}

export default Menu