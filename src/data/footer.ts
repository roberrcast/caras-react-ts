type FooterLinkItem = {
    name: string;
    href: string;
};

export type FooterMenu = {
    title: string;
    links: FooterLinkItem[];
};

export type SocialLink = {
    name: "facebook" | "instagram" | "twitter";
    href: string;
};

export const footerMenus: FooterMenu[] = [
    {
        title: "Descubrir más",
        links: [
            { name: "Entretenimiento", href: "#" },
            { name: "Realeza", href: "#" },
            { name: "Moda", href: "#" },
            { name: "Personalidades", href: "#" },
            { name: "Arte y Cultura", href: "#" },
        ],
    },

    {
        title: "Revista",
        links: [
            { name: "App Store", href: "#" },
            { name: "Edición Impresa", href: "#" },
            { name: "Magzter", href: "#" },
            { name: "Pressreader", href: "#" },
            { name: "Zinio", href: "#" },
        ],
    },

    {
        title: "Legales",
        links: [
            { name: "Aviso de privacidad", href: "#" },
            { name: "Términos de servicio", href: "#" },
        ],
    },
];

// Para el social media
export const socialLinks: SocialLink[] = [
    { name: "facebook", href: "https://www.facebook.com/Revista.Caras" },
    { name: "instagram", href: "https://www.instagram.com/carasmexico/" },
    { name: "twitter", href: "https://x.com/carasmexico" },
];
