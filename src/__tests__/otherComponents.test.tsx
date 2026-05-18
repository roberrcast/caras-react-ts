import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import CommentSection from "../components/CommentSection";
import FeaturedSection from "../components/FeaturedSection";
import Footer from "../components/Footer";

/* -- Mock de los svgs en los botones play/pause en el video ya que causaban error -- */
jest.mock("../assets/playIcon.svg", () => ({
    ReactComponent: () => <div data-testid="play-icon" />,
}));

jest.mock("../assets/pauseIcon.svg", () => ({
    ReactComponent: () => <div data-testid="pause-icon" />,
}));

const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Secondary components", () => {
    it("renders CommentSection", () => {
        renderWithTheme(<CommentSection />);

        const profileImgs = screen.getAllByRole("img");

        expect(profileImgs).toHaveLength(4);

        expect(screen.getByText(/suscriptores/i)).toBeInTheDocument();
    });

    it("renders FeaturedSection", () => {
        const { container } = renderWithTheme(<FeaturedSection />);

        // Title
        expect(screen.getByText(/nuestros suscriptores/i)).toBeInTheDocument();

        // Video de fondo
        const video = container.querySelector("video");
        expect(video).toBeInTheDocument();
    });

    it("renders Footer", () => {
        renderWithTheme(<Footer />);

        expect(
            screen.getByText(/todos los derechos reservados/i),
        ).toBeInTheDocument();
    });
});
