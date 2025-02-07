import "./TechContainer.css";
import Tech from "../Tech/Tech";
import { db } from "../../Js/Firebase/firebase.js";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";


function TechContainer(padding, gap, fontSizeP, fontSizeIcon) {

    const [techs, setTechs] = useState( [] );


    useEffect( () => {
        const fetchTechs = async () => {
            const techCollectionRef = collection( db, "Technologies" )

            const data = await getDocs( techCollectionRef );
            setTechs( data.docs.map( ( doc ) => ( { ...doc.data(), id: doc.id } ) ) );

            console.log( data.docs.map( ( doc ) => ( { ...doc.data(), id: doc.id } ) ) );
        };

        fetchTechs();
    }, [] );

    return (
        <div  id="techs">
            {techs.map((tech) => {
                return(
                    <div>
                        <Tech key={tech.id} name={tech.id} iconName={tech.icon} color={tech.color}></Tech>
                    </div>
                )
            }

            )}
        </div>
    )
}

export default TechContainer;