import "./Project.css"
import ProjectTechContainer from "../ProjectTechContainer/ProjectTechContainer"

function Project ( {name, description, category, link} ) {
    return (
        <div class="project-container">
            <a class="project-container" href={link} target="blank">
            <div id="info">
                <div id="texts">
                    <h3>{name}</h3>
                    <p id="category">{category}</p>
                    <p>{description}</p>
                    
                </div>
                <div id="tech-list">
                    {/* <p>tecnologiastecnologias</p> */}
                    <ProjectTechContainer projectId={name}></ProjectTechContainer>
                </div>
            </div>
            </a>
        </div>
    )

}

export default Project