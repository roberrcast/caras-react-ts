import headlinesImg1 from "../assets/trump.jpg";
import headlinesImg2 from "../assets/david.jpg";
import headlinesImg3 from "../assets/bruno.png";
import headlinesImg4 from "../assets/coachella.png";

export type HeadlinesData = {
    id: number;
    section: string;
    headline: string;
    date: string;
    datetime: string;
    author: string;
    image: string;
    alt: string;
};

export const newsData: HeadlinesData[] = [
    {
        id: 1,
        section: "personalidades",
        headline:
            "Trump decide extinguir los incendios en California negándolos",
        date: "enero 16, 2025",
        datetime: "2025-01-16",
        author: "paul álvarez",
        image: headlinesImg1,
        alt: "Imagen de Donald Trump",
    },
    {
        id: 2,
        section: "personalidades",
        headline:
            "David Attenborough, avergonzado, se da cuenta de que dedicó 10 minutos a describir la quietud de un señuelo para patos",
        date: "enero 16, 2025",
        datetime: "2025-01-16",
        author: "silvia rodríguez",
        image: headlinesImg2,
        alt: "Imagen de David Attenborough",
    },
    {
        id: 3,
        section: "entretenimiento",
        headline:
            "Bruno Mars habría contraido una deuda de 150 millones de dólares con el casino MGM tras asumir que los cócteles eran gratuitos",
        date: "enero 16, 2025",
        datetime: "2025-01-16",
        author: "fito hernández",
        image: headlinesImg3,
        alt: "Imagen de Bruno Mars",
    },
    {
        id: 4,
        section: "entretenimiento",
        headline:
            "Los organizadores de Coachella anuncian planes para ampliar el festival a 52 fines de semana al año",
        date: "enero 16, 2025",
        datetime: "2025-01-16",
        author: "susana armendáriz",
        image: headlinesImg4,
        alt: "Imagen del festival de Coachella",
    },
];
