import "./Project.css"

function Project ( {name, description, tech, category} ) {
    return (
        <div class="project-container">
            <div id="info">
                <div id="texts">
                    <h3>{name}</h3>
                    <p id="category">teste</p>
                    <p>{description}</p>
                    
                </div>
                <div>
                    <p>tecnologias</p>
                </div>
            </div>
        </div>
    )

}

export default Project