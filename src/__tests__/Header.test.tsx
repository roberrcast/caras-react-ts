import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Header from "../components/Header";
import logo from "../assets/Logo-1.png";

describe("Header Component", () => {
    test("renders logo and basic structure", () => {
        render(
            <ThemeProvider theme={theme}>
                <Header logoSrc={logo} />
            </ThemeProvider>,
        );

        // Buscar el logo
        const logoImg = screen.getByRole("img");
        expect(logoImg).toBeInTheDocument();
        expect(logoImg).toHaveAttribute("src", logo);

        // Link del logo
        const logoLink = screen.getAllByRole("link")[0];
        expect(logoLink).toHaveAttribute("href", "#");

        // Link
        const link = screen.getByRole("link", { name: /entretenimiento/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "#entretenimiento");
    });
});
