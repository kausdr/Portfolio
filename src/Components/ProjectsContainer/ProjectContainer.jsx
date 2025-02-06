import "./ProjectContainer.css";
import Project from "../Project/Project";
import { db } from "../../Js/Firebase/firebase.js";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";


function ProjectContainer() {
    const [projects, setProjects] = useState( [] );


    useEffect( () => {
        const fetchProjects = async () => {
            const projectCollectionRef = collection( db, "Projetos" )

            const data = await getDocs( projectCollectionRef );
            setProjects( data.docs.map( ( doc ) => ( { ...doc.data(), id: doc.id } ) ) );

            console.log( data.docs.map( ( doc ) => ( { ...doc.data(), id: doc.id } ) ) );
        };

        fetchProjects();
    }, [] );

    return (
        <div id="projects-container">
            {projects.map((project) => {
                return(
                    <div>
                        <Project name={project.id} description={project.description} category={project.category} ></Project>
                    </div>
                )
            }

            )

            }
        </div>
    )
}

export default ProjectContainer;