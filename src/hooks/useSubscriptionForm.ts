import { useState, useEffect, useRef } from "react";
type UseSubscriptionFormReturn = {
    name: string;
    email: string;
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    closeAlert: () => void;
    emailStatus: "success" | "error" | null;
    emailMessage: string;
    isEmailPromptActive: boolean;
    alertStatus: "success" | "error" | "";
    isAlertActive: boolean;
    alertMessage1: string;
    alertMessage2: string;
    isNamePromptActive: boolean;
    isSubmitPromptActive: boolean;
    submitPromptMessage: string;
};

export const useSubscriptionForm = (): UseSubscriptionFormReturn => {
    // --- Manejo de los estados ---
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Estados de validación de los prompts del email
    const [emailStatus, setEmailStatus] = useState<"success" | "error" | null>(
        null,
    );
    const [emailMessage, setEmailMessage] = useState("");
    const [isEmailPromptActive, setIsEmailPromptActive] = useState(false);

    // Estado modal principal de alerta
    const [alertStatus, setAlertStatus] = useState<"success" | "error" | "">(
        "",
    );
    const [isAlertActive, setIsAlertActive] = useState(false);
    const [alertMessage1, setAlertMessage1] = useState("");
    const [alertMessage2, setAlertMessage2] = useState("");

    // Estados para la validación del submit (name y email)
    const [isNamePromptActive, setIsNamePromptActive] = useState(false);
    const [isSubmitPromptActive, setIsSubmitPromptActive] = useState(false);
    const [submitPromptMessage, setSubmitPromptMessage] = useState("");

    // useRef para manejar el debounce timer
    const debounceTimer = useRef<NodeJS.Timeout | null>(null);

    // -- handlers de los input ---
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    // --- Efectos validación email ---
    useEffect(() => {
        if (debounceTimer.current) clearTimeout(debounceTimer.current);

        if (email.trim() === "") {
            setIsEmailPromptActive(false);
            setEmailStatus(null);
            return;
        }

        debounceTimer.current = setTimeout(() => {
            const emailValidation =
                /^[a-zA-Z0-9._%+;,-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (emailValidation.test(email)) {
                setEmailStatus("success");
                setEmailMessage("Email válido");
            } else {
                setEmailStatus("error");
                setEmailMessage("e-mail no válido");
            }

            setIsEmailPromptActive(true);

            setTimeout(() => setIsEmailPromptActive(false), 3000);
        }, 500);

        return () => {
            if (debounceTimer.current) clearTimeout(debounceTimer.current);
        };
    }, [email]);

    // --- handler para el submit del formulario ---
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nameError = name.trim() === "" ? "Agregue su nombre" : null;
        const emailError = (() => {
            if (email.trim() === "") return "Ingrese un email";
            if (
                !/^[a-zA-Z0-9._%+;,-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                    email,
                )
            )
                return "Ingrese un email válido";
            return null;
        })();

        setIsAlertActive(false);
        setIsNamePromptActive(false);
        setIsSubmitPromptActive(false);
        setAlertMessage1("");
        setAlertMessage2("");

        if (nameError || emailError) {
            setAlertStatus("error");
            setIsAlertActive(true);

            if (nameError) setIsNamePromptActive(true);
            if (emailError) {
                setIsSubmitPromptActive(true);
                setSubmitPromptMessage(emailError);
            }

            if (nameError && emailError) {
                setAlertMessage1(
                    "Por favor ingrese su nombre y correo electrónico",
                );
            } else {
                setAlertMessage1(nameError || emailError || "");
            }

            setTimeout(() => {
                setIsNamePromptActive(false);
                setIsSubmitPromptActive(false);
            }, 3000);
        } else {
            setAlertStatus("success");
            setIsAlertActive(true);
            setAlertMessage1("Suscripción añadida con éxito!");
            setName("");
            setEmail("");
        }
    };

    // --- handler para cerrar el Alert modal ---
    const closeAlert = () => {
        setIsAlertActive(false);
    };

    // --- Return values ---
    // Todos los estados y handlers que ocupa el componente
    return {
        name,
        email,
        handleNameChange,
        handleEmailChange,
        handleSubmit,
        closeAlert,
        emailStatus,
        emailMessage,
        isEmailPromptActive,
        alertStatus,
        isAlertActive,
        alertMessage1,
        alertMessage2,
        isNamePromptActive,
        isSubmitPromptActive,
        submitPromptMessage,
    };
};
