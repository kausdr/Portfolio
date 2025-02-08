import "./ProjectTechContainer.css";
import { db } from "../../Js/Firebase/firebase.js";
import { useEffect, useState } from "react";
import { getDoc, collection, doc } from "firebase/firestore";
import TechProject from "../TechProject/TechProject.jsx";


function ProjectTechContainer( {projectId} ) {

    const [techs, setTechs] = useState( [] );


    useEffect( () => {
        const fetchProjectTechs = async () => {
            if (!projectId) {
                console.error("Erro: projectId não foi fornecido!");
                return;
            };

            try {
                console.log(`Buscando tecnologias para o projeto: ${projectId}`);
                const projectRef  = doc(db, "Projects", projectId );
                const projectSnap = await getDoc(projectRef );

                if (projectSnap.exists()) {
                    const data = projectSnap.data()
                    console.log("Dados do projeto:", data);

                    if (data && Array.isArray(data.techs)) {
                        setTechs(data.techs);
                        console.log("Tecnologias encontradas:", data.techs);
                        console.log("variavel techs:", techs);
                    } else {
                        console.warn("O campo 'techs' não existe ou não é um array no projeto.");
                        setTechs([]);
                    }

                }else {
                    console.log("Projeto não encontrado!");
                    setTechs([]);
                }
            } catch (error) {
                console.error("Erro ao buscar tecnologias:", error);
                setTechs([]);
            }

            

            
        };

        fetchProjectTechs();
    }, [projectId] );

    useEffect(() => {
        console.log("variavel techs foi atualizada:", techs);
    }, [techs]);


    return (
        <div id="techProject-container">
            {techs.length > 0 ? (
                techs.map((tech, index) => {
                    const [icon, color] = tech.split(",");
                    console.log(icon)
                    console.log(color)
                    return (
                        <div key={index}>
                            <TechProject iconName={icon.trim()} color={color.trim()} />
                        </div>
                    );
                })
            ) : (
                <p>Nenhuma tecnologia encontrada.</p>
            )}
        </div>
    );

    // return (
    //     <div id="techProject-container">
    //         {techs.length > 0 ? (
                
    //             techs.map((tech, index) => (
                    
    //                 <TechProject key={index} iconName={tech} />
    //             ))
    //         ) : (
    //             <p></p>
    //         )}
    //     </div>
    // );
}

export default ProjectTechContainer;