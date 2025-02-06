import "./Tech.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Tech( { iconName, color } ) {
    return (
        <div class="main-container">
            <div id="icon">
                <FontAwesomeIcon style={{color: "black"}} icon={faSquareGithub} />
            </div>
            <p>React</p>
        </div>
    )
}

export default Tech