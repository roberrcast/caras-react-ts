import headlinesImg1 from "../assets/trump.webp";
import headlinesImg2 from "../assets/david.webp";
import headlinesImg3 from "../assets/bruno.webp";
import headlinesImg4 from "../assets/coachella.webp";

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

// Genera el string en legible en español: "enero 16, 2026"
const getToday = (): string => {
    const today = new Date();

    // Formateador para el mes en español lowercase
    const monthFormatter = new Intl.DateTimeFormat("es-MX", { month: "long" });
    const month = monthFormatter.format(today);
    const day = today.getDate();
    const year = today.getFullYear();

    return `${month} ${day}, ${year}`;
};

// Genera la estructura para el formato exacto: 2026-09-06
const getYearDayMonth = (): string => {
    const today = new Date();
    const year = today.getFullYear();

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");

    return `${year}-${day}-${month}`;
};

export const newsData: HeadlinesData[] = [
    {
        id: 1,
        section: "personalidades",
        headline:
            "Trump decide extinguir los incendios en California negándolos",
        date: getToday(),
        datetime: getYearDayMonth(),
        author: "paul álvarez",
        image: headlinesImg1,
        alt: "Imagen de Donald Trump",
    },
    {
        id: 2,
        section: "personalidades",
        headline:
            "David Attenborough, avergonzado, se da cuenta de que dedicó 10 minutos a describir la quietud de un señuelo para patos",
        date: getToday(),
        datetime: getYearDayMonth(),
        author: "silvia rodríguez",
        image: headlinesImg2,
        alt: "Imagen de David Attenborough",
    },
    {
        id: 3,
        section: "entretenimiento",
        headline:
            "Bruno Mars habría contraido una deuda de $50 millones de dólares con el casino MGM tras asumir que los cócteles eran gratuitos",
        date: getToday(),
        datetime: getYearDayMonth(),
        author: "fito hernández",
        image: headlinesImg3,
        alt: "Imagen de Bruno Mars",
    },
    {
        id: 4,
        section: "entretenimiento",
        headline:
            "Los organizadores de Coachella anuncian planes para ampliar el festival a 52 fines de semana al año",
        date: getToday(),
        datetime: getYearDayMonth(),
        author: "susana armendáriz",
        image: headlinesImg4,
        alt: "Imagen del festival de Coachella",
    },
];
