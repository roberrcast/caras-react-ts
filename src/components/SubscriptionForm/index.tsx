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
            aria-invalid={isNamePromptActive}
            aria-describedby="name-error"
          />
          <NamePrompt $active={isNamePromptActive} id="name-error">
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
            aria-invalid={isEmailPromptActive || isSubmitPromptActive}
            aria-describedby="email-error"
          />
          <EmailPrompt
            $status={emailStatus ?? undefined}
            $active={isEmailPromptActive}
            id="email-error"
          >
            {emailMessage}
          </EmailPrompt>
          <SubmitPrompt $active={isSubmitPromptActive} id="submit-error">
            {submitPromptMessage}
          </SubmitPrompt>
        </InputGroup>

        <SubmitWrapper>
          <SubmitButton type="submit" value="Suscribirse" />
        </SubmitWrapper>

        <Alert
          $status={alertStatus}
          $active={isAlertActive}
          role="aler"
          arial-live="assertive"
        >
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
