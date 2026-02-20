import React from "react";
import {
    HeadlinesContainer,
    HeadlinesCard,
    HeadlinesImageLink,
    Image,
    Content,
    SectionLink,
    Title,
    Footer,
    Time,
    AuthorLink,
} from "./styles";
import headlinesImg1 from "../../assets/trump.jpg";
import headlinesImg2 from "../../assets/david.jpg";
import headlinesImg3 from "../../assets/bruno.png";
import headlinesImg4 from "../../assets/coachella.png";

const Headlines = () => {
    type HeadlinesData = {
        id: number;
        section: string;
        headline: string;
        date: string;
        author: string;
        image: string;
    };

    const newsData: HeadlinesData[] = [
        {
            id: 1,
            section: "personalidades",
            headline:
                "Trump decide extinguir los incendios en California negándolos",
            date: "enero 16, 2025",
            author: "paul álvarez",
            image: headlinesImg1,
        },
        {
            id: 2,
            section: "personalidades",
            headline:
                "David Attenborough, avergonzado, se da cuenta de que dedicó 10 minutos a describir la quietud de un señuelo para patos",
            date: "enero 16, 2025",
            author: "silvia rodríguez",
            image: headlinesImg2,
        },
        {
            id: 3,
            section: "entretenimiento",
            headline:
                "Bruno Mars habría contraido una deuda de 150 millones de dólares con el casino MGM tras asumir que los cócteles eran gratuitos",
            date: "enero 16, 2025",
            author: "fito hernández",
            image: headlinesImg3,
        },
        {
            id: 4,
            section: "entretenimiento",
            headline:
                "Los organizadores de Coachella anuncian planes para ampliar el festival a 52 fines de semana al año",
            date: "enero 16, 2025",
            author: "susana armendáriz",
            image: headlinesImg4,
        },
    ];
};

export default Headlines;
