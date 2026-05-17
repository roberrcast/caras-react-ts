export const validateName = (name: string): string | null => {
    return name.trim() === "" ? "Agregue su nombre" : null;
};

export const validateEmail = (email: string): string | null => {
    if (email.trim() === "") return "Ingrese un email";

    const emailRegex = /^[a-zA-Z0-9._%+;,-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return "Ingrese un email válido";

    return null;
};
