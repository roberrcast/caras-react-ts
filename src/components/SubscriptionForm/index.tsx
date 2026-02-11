import React, { useState, useEffect, useRef } from "react";
import {
    NewsletterWrapper,
    Title,
    Subtitle,
    Form,
    InputGroup,
    Label,
    Input,
    SubmitButton,
    NamePrompt,
    EmailPrompt,
    SubmitPrompt,
    Alert,
    AlertCloseButton,
    CloseIcon,
    AlertText,
} from "./styles";

const SubscriptionForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const [emailStatus, setEmailStatus] = useState<"success" | "error" | null>(
        null,
    );
    const [emailMessage, setEmailMessage] = useState("");
    const [isEmailPromptActive, setIsEmailPromptActive] = useState(false);

    const debounceTimer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Resetear timeouts existentes
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        if (email.trim() === "") {
            // Si el input está vacío, esconder el prompt inmediatamente
            setIsEmailPromptActive(false);
            setEmailStatus(null);
            return;
        }

        // Comenzar un nuevo timer para hacer 'debounce' a la validación
        debounceTimer.current = setTimeout(() => {
            const validEmail =
                /^[a-zA-Z0-9._%+;,-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (validEmail.test(email)) {
                setEmailStatus("success");
                setEmailMessage("Email válido");
            } else {
                setEmailStatus("error");
                setEmailMessage("e-mail no válido");
            }
            setIsEmailPromptActive(true);

            // Timer para esconder el prompt después de 3 segundos
            setTimeout(() => {
                setIsEmailPromptActive(false);
            }, 3000);
        }, 500); // Espera 500ms después que el usuario deje de escribir

        // Limpiar el componente al hacer unmount o cambie el email
        return () => {
            if (debounceTimer.current) {
                clearTimeout(debounceTimer.current);
            }
        };
    }, [email]);

    // Función para la validación del submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validación, qué errores hay
        const nameError = name.trim() === "" ? "Agregue su nombre" : null;
        const emailError = (() => {
            if (email.trim() === "") return "Ingrese un email";
            if (
                !/^[a-zA-Z0-9._%+;,-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                    email,
                )
            ) {
                return "Ingrese un email válido";
            }

            return null;
        })();

        // Se resetea el estado del UI
        setIsAlertActive(false);
        setIsNamePromptActive(false);
        setIsSubmitPromptActive(false);
        setAlertMessage1("");
        setAlertMessage2("");

        // Manejo de errores o éxito
        if (nameError || emailError) {
            // En caso de error
            setAlertStatus("error");
            setIsAlertActive(true);

            // Inline prompts
            if (nameError) {
                setIsNamePromptActive(true);
            }

            if (emailError) {
                setIsSubmitPromptActive(true);
                setSubmitPromptMessage(emailError);
            }

            // Mensajes de alerta (main)
            if (nameError && emailError) {
                setAlertMessage1(
                    "Por favor agregue su nombre y correo electrónico",
                );
            } else {
                setAlertMessage1(nameError || emailError || "");
            }

            // Esconder el prompt automáticamente después de 3 segundos
            setTimeout(() => {
                setIsNamePromptActive(false);
                setIsSubmitPromptActive(false);
            }, 3000);
        } else {
            // Casos de éxito
            setAlertStatus("success");
            setIsAlertActive(true);
            setAlertMessage1("¡Suscripción añadida con éxito!");
            setName("");
            setEmail("");
        }
    };

    const closeAlert = () => {
        setIsAlertActive(false);
    };

    // Estado para el modal de alerta principal
    const [alertStatus, setAlertStatus] = useState<"success" | "error" | "">(
        "",
    );
    const [isAlertActive, setIsAlertActive] = useState(false);
    const [alertMessage1, setAlertMessage1] = useState("");
    const [alertMessage2, setAlertMessage2] = useState("");

    // Estado del submit
    const [isNamePromptActive, setIsNamePromptActive] = useState(false);
    const [isSubmitPromptActive, setIsSubmitPromptActive] = useState(false);
    const [submitPromptMessage, setSubmitPromptMessage] = useState("");

    return (
        <NewsletterWrapper>
            <Title>Newsletter</Title>
            <Subtitle>Espectáculos, Actualidad, Moda y Cultura</Subtitle>

            <Form noValidate onSubmit={handleSubmit}>
                <InputGroup>
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={name}
                        onChange={handleNameChange}
                    />
                    <NamePrompt $active={isNamePromptActive}>
                        Por favor llene este campo
                    </NamePrompt>
                </InputGroup>

                <InputGroup>
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <EmailPrompt
                        $status={emailStatus ?? undefined}
                        $active={isEmailPromptActive}
                    >
                        {emailMessage}
                    </EmailPrompt>
                    <SubmitPrompt $active={isSubmitPromptActive}>
                        {submitPromptMessage}
                    </SubmitPrompt>
                </InputGroup>

                <div>
                    <SubmitButton type="submit" value="Suscribirse" />
                </div>

                <Alert $status={alertStatus} $active={isAlertActive}>
                    <AlertCloseButton onClick={closeAlert}>
                        <CloseIcon />
                    </AlertCloseButton>
                    <AlertText>{alertMessage1}</AlertText>
                    {alertMessage2 && <AlertText>{alertMessage2}</AlertText>}
                </Alert>
            </Form>
        </NewsletterWrapper>
    );
};

export default SubscriptionForm;
