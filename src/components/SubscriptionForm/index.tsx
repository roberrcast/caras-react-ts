import React from "react";
import { useSubscriptionForm } from "../../hooks/useSubscriptionForm";
import {
    NewsletterWrapper,
    Title,
    Subtitle,
    Form,
    InputGroup,
    Label,
    Input,
    SubmitWrapper,
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
    const {
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
    } = useSubscriptionForm();
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

                <SubmitWrapper>
                    <SubmitButton type="submit" value="Suscribirse" />
                </SubmitWrapper>

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
