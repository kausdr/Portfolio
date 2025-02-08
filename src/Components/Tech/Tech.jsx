import "./Tech.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcons from '@fortawesome/free-brands-svg-icons';


function Tech( { iconName, color, name } ) {
    const icon = faIcons[iconName];
    
    return (

        <div class="main-container" style={{ color: color }}>
            <div id="icon">
                <FontAwesomeIcon style={{ color: color }} icon={icon} />
            </div>
            <p id="techName">{name}</p>
        </div>
    )
}

export default Tech