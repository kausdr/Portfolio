import "./TechProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fabIcons from '@fortawesome/free-brands-svg-icons';
import * as faIcons from '@fortawesome/free-solid-svg-icons';
import * as farIcons from '@fortawesome/free-regular-svg-icons';



function TechProject( { iconName, color} ) {
    let icon = null;

    if (fabIcons[iconName]) {
      icon = fabIcons[iconName];
    } else if (faIcons[iconName]) {
      icon = faIcons[iconName];
    } else if (farIcons[iconName]) {
      icon = farIcons[iconName];
    }

    if (!icon) {
        console.error(`Ícone ${iconName} não encontrado em nenhum pacote`);
        return <div><p></p></div>;
      }
    
    return (

        <div class="main-container-techProject">
                <FontAwesomeIcon icon={icon} style={{color: color}}/>
        </div>
    )
}

export default TechProject