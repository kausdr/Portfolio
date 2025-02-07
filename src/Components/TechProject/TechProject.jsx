import "./TechProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcons from '@fortawesome/free-brands-svg-icons';


function TechProject( { iconName, color} ) {
    const icon = faIcons[iconName];
    
    return (

        <div class="main-container-techProject">
                <FontAwesomeIcon icon={icon} style={{color: color}}/>
        </div>
    )
}

export default TechProject