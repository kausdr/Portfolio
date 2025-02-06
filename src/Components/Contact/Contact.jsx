import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <div>
            <ul class="contact">
                <li>
                    <a href="https://github.com/kausdr" target="blank">
                        <FontAwesomeIcon icon={faSquareGithub}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kauanesantana/" target="blank">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact