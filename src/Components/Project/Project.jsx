import "./Project.css"
import ProjectTechContainer from "../ProjectTechContainer/ProjectTechContainer"

function Project ( {name, description, category} ) {
    return (
        <div class="project-container">
            <div id="info">
                <div id="texts">
                    <h3>{name}</h3>
                    <p id="category">teste</p>
                    <p>{description}</p>
                    
                </div>
                <div id="tech-list">
                    {/* <p>tecnologiastecnologias</p> */}
                    <ProjectTechContainer projectId={name}></ProjectTechContainer>
                </div>
            </div>
        </div>
    )

}

export default Project