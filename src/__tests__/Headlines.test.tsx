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
    it("renders all headlines", () => {
        renderWithTheme(<Headlines />);

        newsData.forEach((item) => {
            expect(
                screen.getByText(item.headline, { exact: false }),
            ).toBeInTheDocument();
        });
    });

    it("renders correct number of images", () => {
        renderWithTheme(<Headlines />);

        const images = screen.getAllByRole("img");
        expect(images).toHaveLength(newsData.length);
    });
});
