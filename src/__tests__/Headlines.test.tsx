import React from "react";
import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { render } from "@testing-library/react";
import Headlines from "../components/Headlines";
import { newsData } from "../data/headlines";

const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Headlines component", () => {
    // Para las funciones de fecha, congelamos la fecha del sistema a una fecha en específico
    beforeEach(() => {
        // Fecha específica del 9 de junio, 2026
        const mockDate = new Date(2026, 5, 9); // Meses se indexan comenzando desde 0 - 1 - 2 - etc.
        jest.useFakeTimers().setSystemTime(mockDate);
    });

    // Limpiar el la fecha y restaurarla después de terminar el test
    afterEach(() => {
        jest.useRealTimers();
    });

    it("renders all headlines", () => {
        renderWithTheme(<Headlines />);

        newsData.forEach((item) => {
            expect(
                screen.getByText(item.headline, { exact: false }),
            ).toBeInTheDocument();
        });
    });

    it("renders correct number of images", () => {
        const { container } = renderWithTheme(<Headlines />);

        const images = container.querySelectorAll("img");

        expect(images).toHaveLength(newsData.length);
    });

    it("should render the current date and format it", () => {
        renderWithTheme(<Headlines />);

        const expectedFormattedDate = "junio 9, 2026";

        const dateElements = screen.getAllByText(expectedFormattedDate, {
            exact: false,
        });

        expect(dateElements.length).toBeGreaterThan(0);
        expect(dateElements[0]).toBeInTheDocument();
    });
});
