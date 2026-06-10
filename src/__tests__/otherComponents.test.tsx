import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import CommentSection from "../components/CommentSection";
import FeaturedSection from "../components/FeaturedSection";
import Footer from "../components/Footer";

/* -- Mock de los svgs en los botones play/pause en el video ya que causaban error -- */
jest.mock("../assets/playIcon.svg", () => ({
    ReactComponent: (props: React.HTMLAttributes<HTMLDivElement>) => (
        <div data-testid="play-icon" {...props} />
    ),
}));

jest.mock("../assets/pauseIcon.svg", () => ({
    ReactComponent: (props: React.HTMLAttributes<HTMLDivElement>) => (
        <div data-testid="pause-icon" {...props} />
    ),
}));
const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Secondary components", () => {
    it("renders CommentSection", () => {
        renderWithTheme(<CommentSection />);

        const profileImgs = screen.getAllByRole("img");

        expect(profileImgs).toHaveLength(4);

        expect(screen.getByText(/comunidad/i)).toBeInTheDocument();
    });

    it("renders FeaturedSection", () => {
        const { container } = renderWithTheme(<FeaturedSection />);

        // Title
        expect(
            screen.getByText(/forma parte del círculo/i),
        ).toBeInTheDocument();

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

    it("toggles play/pause state when the button is clicked", () => {
        const { container } = renderWithTheme(<FeaturedSection />);

        const video = container.querySelector("video") as HTMLVideoElement;

        // Forzar al video reportar que no está pausado
        Object.defineProperty(video, "paused", {
            value: false,
            configurable: true,
        });

        const button = screen.getByRole("button");

        // Obtener iconos de @setUptests.ts 'data-testid'
        const pauseIcon = screen.getByTestId("pause-icon");
        const playIcon = screen.getByTestId("play-icon");

        fireEvent.click(button);

        expect(pauseIcon).toHaveAttribute(
            "style",
            expect.stringContaining("opacity: 0"),
        );
        expect(playIcon).toHaveAttribute(
            "style",
            expect.stringContaining("opacity: 1"),
        );
    });
});
