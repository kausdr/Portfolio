import "./Tech.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fabIcons from '@fortawesome/free-brands-svg-icons';
import * as faIcons from '@fortawesome/free-solid-svg-icons';
import * as farIcons from '@fortawesome/free-regular-svg-icons';

function Tech( { iconName, color, name } ) {
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
        return <div><p>Ícone não encontrado</p></div>;
    }
    
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