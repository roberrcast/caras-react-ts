import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import SubscriptionForm from "../components/SubscriptionForm";
import { validateEmail, validateName } from "../utils/validators";

const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("SubscriptionForm component", () => {
    it("renders all input fields and submit button", () => {
        renderWithTheme(<SubscriptionForm />);

        expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();

        expect(
            screen.getByLabelText(/correo electrónico/i),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /suscribirse/i }),
        ).toBeInTheDocument();
    });

    it("should show success message when a form is valid", () => {
        renderWithTheme(<SubscriptionForm />);

        const nameInput = screen.getByLabelText(/nombre/i);
        const emailInput = screen.getByLabelText(/correo electrónico/i);
        const submitButton = screen.getByRole("button", {
            name: /suscribirse/i,
        });

        // Llenar los inputs
        fireEvent.change(nameInput, { target: { value: "Juan Pérez" } });
        fireEvent.change(emailInput, { target: { value: "jp@mail.com" } });

        // Click en submit
        fireEvent.click(submitButton);

        expect(
            screen.getByText(/suscripción añadida con éxito/i),
        ).toBeInTheDocument();
    });

    it("should show an error messge when the name input is empty", () => {
        renderWithTheme(<SubscriptionForm />);

        // Input vacío
        const nameInput = screen.getByLabelText(/nombre/i);
        fireEvent.change(nameInput, { target: { value: "" } });

        const emailInput = screen.getByLabelText(/correo electrónico/i);
        fireEvent.change(emailInput, { target: { value: "123@mail.com" } });

        // Hacer submit
        fireEvent.click(screen.getByRole("button", { name: /suscribirse/i }));

        expect(screen.getByText(/agregue su nombre/i)).toBeInTheDocument();
    });

    it("should render an error message if email is empty", () => {
        renderWithTheme(<SubscriptionForm />);

        const nameInput = screen.getByLabelText(/nombre/i);
        const emailInput = screen.getByLabelText(/correo electrónico/i);

        fireEvent.change(nameInput, { target: { value: "Juan" } });
        fireEvent.change(emailInput, { target: { value: "" } });

        fireEvent.click(screen.getByRole("button", { name: /suscribirse/i }));

        expect(screen.getAllByText(/ingrese un email/i)).toHaveLength(2);
    });

    it("should show add name and email if both inputs are empty message", () => {
        renderWithTheme(<SubscriptionForm />);

        // Inputs vacíos
        const inputs = screen.getAllByRole("textbox");
        inputs.forEach((input) => {
            fireEvent.change(input, { target: { value: "" } });
        });

        // Click del button
        fireEvent.click(screen.getByRole("button", { name: /suscribirse/i }));

        const emailErrors = screen.getAllByText(/agregue su nombre/i);
        expect(emailErrors.length).toBeGreaterThan(0);
    });

    it("should validateEmail with invalid format returns specific error", () => {
        const result = validateEmail("juan@mail");

        expect(result).toBe("Ingrese un email válido");
    });

    test("full validation logic simultion", () => {
        const name = "";
        const email = "invalid@com";

        const nameError = validateName(name);
        const emailError = validateEmail(email);

        expect(nameError).toBe("Agregue su nombre");
        expect(emailError).toBe("Ingrese un email válido");
    });
});
