export const theme = {
    colors: {
        primary: "#ed1e1e",
        textMain: "#404040",
        textSub: "#999999",
        footerBg: "#fbfbfb",
        bgSecondary: "#f3f3f3",
        bgWhite: "#fff",
        bgOther: "#eeece7",
        footerText: "#666",
        linkHover: "#242424",
        border: "#e3e3e3",
        black: "#000",
        prompts: {
            error: "rgba(237, 30, 30, 0.7)",
            success: "rgba(46, 125, 50, 0.7)",
            name: "rgba(255, 193, 7, 0.7)",
            form: "rgba(255, 193, 7, 0.95)",
            text: "#1a1a1a",
            success2: "rgba(46, 125, 50, 0.95)",
        },
    },

    fonts: {
        barlowLight: "'Barlow-light', Arial, Helvetica, sans-serif",
        barlowBold: "'Barolw-bold', Arial, Helvetica, sans-serif",
        playfair: "'Playfair', serif, Arial",
    },

    borders: {
        main: "1px solid #e3e3e3",
    },
};

export type ThemeType = typeof theme;
