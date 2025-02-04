import './Menu.css';

function Menu() {
    return  (
        <div class='menu-container'>
            <div id="pic-placeholder">
              <img src='https://placehold.jp/40x40.png' alt="Website's logo"></img>
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